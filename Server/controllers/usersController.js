const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");
const {
  User,
  validateRegisterUser,
  validateNewPassword,
  validateLoginUser,
} = require("../models/Users");
const { deleteImage, handleErrors } = require("../utils/helpers");

const controller = {
  // Get all users
  getAll: async (req, res) => {
    try {
      //Vérification du token
      if (req.user.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }
      const users = await User.find({});

      if (users.length > 0) {
        let transformedUsers = users.map((user) => {
          // Exclure certaines propriétés du document utilisateur
          let { password, updatedAt, __v, ...other } = user._doc;
          return other;
        });

        return res.status(200).send(transformedUsers);
      } else {
        return handleErrors(res, 404, {
          message: "Empty DB",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  // Get one user
  getOne: async (req, res) => {
    try {
      //Vérification du token
      if (req.user.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      const userInDB = await User.findOne({ email: req.params.email });
      if (!userInDB) {
        return handleErrors(res, 404, {
          message: `${req.params.email} n'existe pas dans la DB`,
        });
      } else {
        // Exclure certaines propriétés du document utilisateur
        let { password, updatedAt, __v, ...other } = userInDB._doc;

        return res.status(200).send(other);
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //search user
  searchUser: async (req, res) => {
    try {
      console.log(req.params.searchUser);
      //Vérification du token
      if (req.user.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }
      const users = await User.find({
        email: { $regex: new RegExp(req.params.searchUser, "i") },
      });

      if (users.length > 0) {
        const filteredUsers = users.map((user) => {
          const { password, updatedAt, __v, ...other } = user._doc;
          return other;
        });

        return res.status(200).json(filteredUsers);
      } else {
        return handleErrors(res, 404, {
          message: `${req.params.searchUser} non trouvé`,
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  // Register user
  registerUser: async (req, res) => {
    try {
      const { error } = validateRegisterUser(req.body);

      if (error) {
        if (req.file) {
          deleteImage(req.file.filename);
        }
        return handleErrors(res, 400, {
          message: error.details[0].message,
        });
      }

      // Vérifier si l'e-mail existe déjà
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        if (req.file) {
          deleteImage(req.file.filename);
        }
        return handleErrors(res, 400, {
          message: "Merci de saisir une autre adresse e-mail",
        });
      }

      // Hacher le mot de passe avant de l'enregistrer
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password.trim(), salt);

      if (req.file === undefined) {
        user = new User({
          email: req.body.email,
          password: req.body.password,
        });
      } else {
        user = new User({
          email: req.body.email,
          password: req.body.password,
          avatar: req.file.filename,
        });
      }

      // Enregistrer l'utilisateur dans la base de données
      const result = await user.save();

      // Générer un token JWT pour l'utilisateur
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "5h",
        }
      );

      // Exclure certaines propriétés du document résultant
      const { password, updatedAt, __v, ...other } = result._doc;

      res
        .status(201)
        .json([
          { message: `${result.email} votre compte a bien être créé` },
          { ...other },
          { token },
        ]);
    } catch (error) {
      if (req.file) {
        deleteImage(req.file.filename);
      }
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  // login user
  loginUser: async (req, res) => {
    try {
      const { error } = validateLoginUser(req.body);

      if (error) {
        return handleErrors(res, 400, {
          message: error.details[0].message,
        });
      }

      // Vérifier si l'utilisateur existe
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // Vérifier si le mot de passe correspond
        const isPasswordMatch = await bcrypt.compare(
          req.body.password.trim(),
          user.password
        );

        if (user && isPasswordMatch) {
          // Générer un token JWT pour l'utilisateur
          const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "5h",
            }
          );
          const { password, updatedAt, __v, ...other } = user._doc;
          return res
            .status(200)
            .json([
              { message: ` ${user.email} vous êtes bien connecté` },
              { ...other },
              { token },
            ]);
        } else {
          return handleErrors(res, 401, {
            message: "Vous avez saisi un email ou mot de passe incorrect",
          });
        }
      } else {
        return handleErrors(res, 401, {
          message: "Un problème est survenu, veuillez réessayer",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  // Update user

  updateUser: async (req, res) => {
    try {
      //Vérification du token
      if (req.user.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      // Vérifier si l'utilisateur existe
      let user = await User.find({ _id: req.params.id });

      if (user.length > 0) {
        // Hacher le mot de passe avant de l'enregistrer
        if (req.body.password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password.trim(), salt);
        }
        let data;
        let avatar;

        if (req.file === undefined) {
          data = {
            email: req.body.email || user.email,
            password: req.body.password || user.password,
          };
        } else {
          avatar = user[0].avatar;

          // supprimer l'ancien avatar
          if (avatar !== "avatarDefault.jpg") {
            deleteImage(avatar);
          }
          data = {
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            avatar: req.file.filename || user.avatar,
          };
        }

        await User.findOneAndUpdate(
          {
            _id: req.params.id,
          },
          data
        );
        return handleErrors(res, 200, {
          message: "Le profile a bien été mis à jour",
        });
      } else {
        return handleErrors(res, 404, {
          message: "Profile non trouvé",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  // Supprimer un utilisateur
  deleteUser: async (req, res) => {
    try {
      //Vérification du token
      if (req.user.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      const userPicture = await User.findOne({ email: req.params.deleteUser });

      // supprimer la photo de user

      const photo = userPicture.avatar;

      if (photo !== "avatarDefault.jpg") {
        deleteImage(photo);
      }

      // Supprimer l'utilisateur
      setTimeout(async () => {
        await User.findOneAndDelete({
          email: req.params.deleteUser,
        });
        return handleErrors(res, 200, {
          message: "Le compte a bien été supprimé",
        });
      }, 2000);
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },
};

module.exports = controller;
