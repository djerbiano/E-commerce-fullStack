const express = require("express");
const productsController = require("../controllers/productsController");
const virifyToken = require("../middlewares/virifyToken");
const mult = require("../middlewares/multer");
const route = express.Router();

//Get all products
route.get("/:currentUser", virifyToken, productsController.getAllProducts);

//Get one product
route.get("/", virifyToken, productsController.getAllProducts);

//Add product
route.post("/", virifyToken, mult, productsController.getAllProducts);

//Delete product
route.delete("/", virifyToken, productsController.getAllProducts);

module.exports = route;
