const dotenv = require("dotenv").config();
const { User } = require("../models/Users");
const { Product } = require("../models/Product");

const controller = {
  //Get all posts
  getAllProducts: async (req, res) => {
try {
    //Vérification du token
    if (req.user.id !== req.params.currentUser) {
      return res.status(403).json({
        message: "Token non valide, veuillez vous reconnecter",
      });
    }

  const product = await Product.find({});

  if (product.length > 0) {
    return res.status(200).json(posts);
  } else {
    return res
      .status(200)
      .json({ message: "There are no product in the database" });
  }
} catch (error) {
  return res.status(400).json({ message: error });
}
  },

};

module.exports = controller;
