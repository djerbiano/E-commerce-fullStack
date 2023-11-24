const express = require("express");
const productsController = require("../controllers/productsController");
const virifyToken = require("../middlewares/virifyToken");
const mult = require("../middlewares/multer");
const route = express.Router();

//Get all products
route.get("/", productsController.getAllProducts);



//Get one product
route.get("/:oneProduct", productsController.getAllProducts);

//Add product
route.post("/addProduct", virifyToken, mult, productsController.getAllProducts);

//Update product
route.patch(
  "/updateProduct/:product",
  virifyToken,
  productsController.getAllProducts
);

//Delete product
route.delete(
  "/deleteProduct/:productDelete",
  virifyToken,
  productsController.getAllProducts
);

module.exports = route;
