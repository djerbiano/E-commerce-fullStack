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
      // vérification du token
      let compteExiste = await User.findOne({ _id: req.user.id });
      //Vérification du token
      if (compteExiste === null || compteExiste.isAdmin === false) {
        return handleErrors(res, 403, {
          message:
            "Vous devez être un administrateur pour effectuer cette requête",
        });
      }

      const newProduct = new Product({
        title: req.body.title,
        regularPrice: req.body.regularPrice,
        salePrice: req.body.salePrice,
        description: {
          desc1: req.body.desc1 || "Aucune description",
          desc2: req.body.desc2 || "Aucune description",
          desc3: req.body.desc3 || "Aucune description",
        },
        pictures: {
          pic1: req.files[0]?.filename || "avatarDefault.jpg",
          pic2: req.files[1]?.filename || "avatarDefault.jpg",
          pic3: req.files[2]?.filename || "avatarDefault.jpg",
        },
      });

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
  updateProduct: async (req, res) => {},

  //Delete product
  deleteProduct: async (req, res) => {},
};

module.exports = controller;
