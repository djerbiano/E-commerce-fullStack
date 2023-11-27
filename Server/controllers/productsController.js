const dotenv = require("dotenv").config();
const { User } = require("../models/Users");
const Product = require("../models/Product");
const { deleteImage, handleErrors } = require("../utils/helpers");
const controller = {
  //Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();

      if (products.length > 0) {
        return res.status(200).json(products);
      } else {
        return handleErrors(res, 404, {
          message: "Aucun produit n'existe dans la base de données",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Get one product
  getOneProduct: async (req, res) => {
    try {
      const products = await Product.find({
        title: { $regex: new RegExp(req.params.oneProduct, "i") },
      });

      if (products.length > 0) {
        return res.status(200).json(products);
      } else {
        return handleErrors(res, 404, {
          message: ` ${req.params.oneProduct} n'existe pas`,
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Add product
  addProduct: async (req, res) => {
    try {
      let compteExiste = await User.findOne({ _id: req.user.id });
      //Vérification du token
      if (compteExiste === null || compteExiste.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      const newProduct = new Product(req.body);

      const savedProduct = await newProduct.save();

      if (savedProduct) {
        return res.status(200).json(savedProduct);
      } else {
        return handleErrors(res, 404, {
          message: "Impossible d'ajouter le produit",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Update product
  updateProduct: async (req, res) => {
    try {
      //Vérification du token
      let compteExiste = await User.findOne({ _id: req.user.id });
      if (compteExiste === null || compteExiste.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      const updateProd = await Product.findOne({
        _id: req.params.product,
      });

      if (!updateProd) {
        return handleErrors(res, 404, {
          message: ` Le produit n'existe pas`,
        });
      } else {
        if (Object.keys(req.body).length === 0) {
          return handleErrors(res, 400, {
            message: "Vous n'avez rempli aucun champ",
          });
        }

        if (req.body.title) {
          updateProd.title = req.body.title;
        }
        if (req.body.regularPrice) {
          updateProd.regularPrice = req.body.regularPrice;
        }
        if (req.body.salePrice) {
          updateProd.salePrice = req.body.salePrice;
        }
      }
      const savedProduct = await updateProd.save();

      return res.status(200).json(savedProduct);
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Delete product
  deleteProduct: async (req, res) => {
    try {
      //Vérification du token
      let compteExiste = await User.findOne({ _id: req.user.id });
      if (compteExiste === null || compteExiste.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      const deleteProd = await Product.findOne({
        _id: req.params.productDelete,
      });

      if (!deleteProd) {
        return handleErrors(res, 404, {
          message: ` Le produit n'existe pas`,
        });
      } else {
        // supprimer les photos du produit
        const deletePhoto = Object.values(await deleteProd.pictures);
        for (const photo of deletePhoto) {
          if (photo !== "avatarDefault.jpg") {
            deleteImage(photo);
          }
        }

        // Supprimer le produit
        await Product.findOneAndDelete({
          _id: req.params.productDelete,
        });

        return handleErrors(res, 200, {
          message: "Le produit a bien été supprimé",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Ajouter un article dans la liste de favoris
  addFavorite: async (req, res) => {
    try {
      //Vérification du token
      const user = await User.findOne({ _id: req.user.id });

      if (!user) {
        return handleErrors(res, 200, {
          message: ` Veuillez vous inscrire pour pouvoir ajouter des produits dans votre liste`,
        });
      }

      const product = await Product.findOne({ _id: req.params.favo });

      if (!product) {
        return handleErrors(res, 404, {
          message: ` Le produit n'existe pas`,
        });
      }
      const favoriteList = await user.favoritesProduct;
      const productInList = req.params.favo;
      if (favoriteList.includes(productInList)) {
        return handleErrors(res, 400, {
          message: ` L'article est déjà dans votre liste`,
        });
      }

      favoriteList.push(product._id);
      await user.save();

      return handleErrors(res, 200, {
        message: "Le produit a bien éte ajouté",
      });
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },
};

module.exports = controller;
