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

const controller = {
  // Get all users
  getAll: async (req, res) => {
    //Vérification du token
    if (req.headers.token !== process.env.TOKEN_ALL_USERS) {
      return res.status(403).json({
        message: "invalidToken",
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
      return res.status(404).json({ message: "Empty DB" });
    }
  },

  // Get one user
  getOne: async (req, res) => {
    try {
      // Verification du token
      const userInDB = await User.findOne({ _id: req.user.id });
      if (!userInDB) {
        return res.status(403).json({
          message: "you are not allowed to access this resource",
        });
      }
      const users = await User.findOne({ _id: req.params.id });
      if (users) {
        // Exclure certaines propriétés du document utilisateur
        let { password, updatedAt, __v, ...other } = users._doc;

        return res.status(200).send(other);
      } else {
        return res
          .status(404)
          .json({ message: `User : ${req.params.id} not found` });
      }
    } catch (error) {
      return res
        .status(400)
        .json({ message: `User : ${req.params.id} not found` });
    }
  },

  //search user
  searchUser: async (req, res) => {
    try {
      // Verification du token
      if (req.user.id !== req.params.id) {
        return res.status(403).json({
          message: "you are not allowed, you only can update your profile",
        });
      }
      const users = await User.find({
        userName: { $regex: new RegExp(req.params.userName, "i") },
      });

      if (users.length > 0) {
        const filteredUsers = users.map((user) => {
          const { password, updatedAt, __v, ...other } = user._doc;
          return other;
        });

        return res.status(200).json(filteredUsers);
      } else {
        return res
          .status(404)
          .json({ message: `User : ${req.params.userName} not found` });
      }
    } catch (error) {
      return res
        .status(400)
        .json({ message: `User : ${req.params.userName} not found` });
    }
  },

  // Register user
  registerUser: async (req, res) => {
    const { error } = validateRegisterUser(req.body);

    if (error) {
      if (req.file) {
        let pictureError = req.file.filename;
        console.log(pictureError);
        if (pictureError) {
          const picture = path.resolve(__dirname, "../images", pictureError);
          fs.unlink(picture, (err) => {
            if (err) console.log(err);
          });
        }
      }
      return res.status(400).json({ message: error.details[0].message });
    }

    // Vérifier si l'e-mail existe déjà
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.file) {
        let pictureError = req.file.filename;
        if (pictureError) {
          const picture = path.resolve(__dirname, "../images", pictureError);
          fs.unlink(picture, (err) => {
            if (err) console.log(err);
          });
        }
      }
      return res
        .status(400)
        .json({ message: "Merci de saisir une autre adresse e-mail" });
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
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5h" }
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
  },

  // login user
  loginUser: async (req, res) => {
    try {
      const { error } = validateLoginUser(req.body);

      if (error) {
        return res.status(400).json({ message: error.details[0].message });
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
            { id: user._id, email: user.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5h" }
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
          return res.status(401).json({
            message: "Vous avez saisi un email ou mot de passe incorrect",
          });
        }
      } else {
        return res.status(401).json({
          message: "Un problème est survenu, veuillez réessayer",
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: "Un problème est survenu, veuillez réessayer",
        error: error.message,
      });
    }
  },

  // Update user

  updateUser: async (req, res) => {
    try {
      //L'utilisateur ne peut mettre à jour que son propre profil
      if (req.user.id !== req.params.id) {
        return res.status(403).json({
          message: "you are not allowed, you only can update your profile",
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
            const picture = path.resolve(__dirname, "../images", avatar);
            fs.unlink(picture, (err) => {
              if (err) console.log(err);
            });
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

        return res.status(200).json({ message: "User updated !" });
      } else {
        return res.status(404).json({ message: "User not found !" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "invalid user" });
    }
  },

  // Supprimer un utilisateur
  deleteUser: async (req, res) => {
    try {
      //L'utilisateur ne peut mettre à jour que son propre profil
      if (req.user.id !== req.params.id) {
        return res.status(403).json({
          message: "you are not allowed, you only can delete your profile",
        });
      }

      const userPicture = await User.findOne({ _id: req.params.id });

      // supprimer la photo de user

      const photo = userPicture.avatar;

      if (photo !== "avatarDefault.jpg") {
        const picture = path.resolve(__dirname, "../images", photo);
        fs.unlink(picture, (err) => {
          if (err) console.log(err);
        });
      }

      // Supprimer l'utilisateur
      setTimeout(async () => {
        await User.findOneAndDelete({
          _id: req.params.id,
        });
        return res.status(200).json({ message: "User deleted!" });
      }, 2000);
    } catch (error) {
      return res.status(400).json({ message: "invalid user", error });
    }
  },
};

module.exports = controller;
