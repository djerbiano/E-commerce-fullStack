const express = require("express");
const orderController = require("../controllers/orderController");
const virifyToken = require("../middlewares/virifyToken");
const route = express.Router();

//Get all order
route.get("/", virifyToken, orderController.getAllOrder);

//Get one order
route.get("/:oneOrder", virifyToken, orderController.getOneOrder);

//Add order
route.post("/addOrder", virifyToken, orderController.addOrder);

//Update order
route.patch("/updateOrder/:order", virifyToken, orderController.updateOrder);

//Delete order
route.delete(
  "/deleteOrder/:orderDelete",
  virifyToken,
  orderController.deleteOrder
);

module.exports = route;
