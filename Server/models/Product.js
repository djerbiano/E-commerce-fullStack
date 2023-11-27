const { boolean } = require("joi");
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
    category: {
      type: String,
      required: true,
      enum: [
        "Homme",
        "Femme",
        "Informatique",
        "Tv - Son",
        "Téléphonie",
        "Objets connectés",
      ],
    },
    stock: {
      type: Boolean,
      default: true,
    },
    colors: [
      {
        color: {
          type: String,
          required: true,
        },
        sizes: [
          {
            size: {
              type: String,
              required: true,
            },
            quantity: {
              type: Number,
              default: 0,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductsSchema);
module.exports = Product;
