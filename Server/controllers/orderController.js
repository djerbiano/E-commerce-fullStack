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
