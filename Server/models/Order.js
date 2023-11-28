const mongoose = require("mongoose");
const Product = require("../models/Product");
const User = require("../models/Users");

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["payée", "expédiée", "reçue"],
      default: "payée",
    },
    statusHistory: [
      {
        status: {
          type: String,
          enum: ["payée", "expédiée", "reçue"],
          default: "payée",
        },
        startDate: { type: Date, default: Date.now },
      },
    ],
    total: { type: Number, required: true },
    billingAddress: { type: String },
    shippingAddress: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
