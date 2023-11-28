const dotenv = require("dotenv").config();
const { User } = require("../models/Users");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { handleErrors } = require("../utils/helpers");
const controller = {
  //Get all order
  getAllOrder: async (req, res) => {
    try {
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Get one order
  getOneOrder: async (req, res) => {
    try {
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Add order
  addOrder: async (req, res) => {
    try {
      //Vérification du token

      if (req.user.id !== req.params.userId) {
        return res.status(403).json({
          message: "Token non valide, veuillez vous reconnecter",
        });
      }

      const user = await User.findOne({ _id: req.user.id });

      if (!user) {
        return handleErrors(res, 200, {
          message: ` Veuillez vous inscrire pour passer commande`,
        });
      }

      if (req.body.products.length === 0) {
        return handleErrors(res, 200, {
          message: ` Veuillez ajouter au moins un produit`,
        });
      }
      // Recherche des produits commandés dans la base de données
      for (let i = 0; i < req.body.products.length; i++) {
        const { product, quantity } = req.body.products[i];
        const productInDb = await Product.findById(product);

        if (!productInDb) {
          return handleErrors(res, 404, {
            message: ` Un des produits de votre panier est en rupture de stock`,
          });
        }

        // Recherche de la quantité disponible dans les couleurs et tailles
        let quantityAvailable = false;

        for (const color of productInDb.colors) {
          for (const size of color.sizes) {
            if (size.quantity >= quantity) {
              quantityAvailable = true;
              break;
            }
          }
          if (quantityAvailable) {
            break;
          }
        }

        if (!quantityAvailable) {
          return handleErrors(res, 404, {
            message:
              "La quantité demandée pour le produit est indisponible en stock",
          });
        }
      }

      const order = new Order({
        orderId: req.body.orderId,
        products: req.body.products,
        user: req.user.id,
        total: req.body.total,
        billingAddress: req.body.billingAddress || req.body.shippingAddress,
        shippingAddress: req.body.shippingAddress,
      });

      const savedOrder = await order.save();

      if (savedOrder) {
        return res.status(200).json(savedOrder);
      } else {
        return handleErrors(res, 404, {
          message: "Impossible d'ajouter la commande",
        });
      }
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Update order
  updateOrder: async (req, res) => {
    try {
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Delete order
  deleteOrder: async (req, res) => {
    try {
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },
};

module.exports = controller;
