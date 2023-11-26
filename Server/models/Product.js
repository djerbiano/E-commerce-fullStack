const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    description: {
      desc1: {
        type: String,
      },
      desc2: {
        type: String,
      },
      desc3: {
        type: String,
      },
    },
    pictures: {
      pic1: {
        type: String,
        default: "avatarDefault.jpg",
      },
      pic2: {
        type: String,
        default: "avatarDefault.jpg",
      },
      pic3: {
        type: String,
        default: "avatarDefault.jpg",
      },
    },

    colors: [
      {
        type: String,
        enum: ["Blanc", "Noir", "Bleu"],
      },
    ],
    sizes: [
      {
        type: String,
        enum: ["S", "M", "L", "XL", "XXL"],
      },
    ],
    stock: [
      {
        color: {
          type: String,
          enum: ["Blanc", "Noir", "Bleu"],
        },
        size: {
          type: String,
          enum: ["S", "M", "L", "XL", "XXL"],
        },
        quantity: {
          type: Number,
          default: 10,
        },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductsSchema);
module.exports = Product;
