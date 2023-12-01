const express = require("express");
const orderController = require("../controllers/orderController");
const virifyToken = require("../middlewares/virifyToken");
const route = express.Router();

//Get all order
route.get("/", virifyToken, orderController.getAllOrder);

//Get all order by user
route.get("/user/:userrId", virifyToken, orderController.getAllOrderByUser);

//Get one order
route.get("/:trackingNumber", virifyToken, orderController.getOneOrder);

//Add order
route.post("/addOrder/:userId", virifyToken, orderController.addOrder);

//Update order
route.patch("/updateOrder/:orderTrackingNumber", virifyToken, orderController.updateOrder);

//Delete order
route.delete(
  "/deleteOrder/:orderDeleteTrackingNumber",
  virifyToken,
  orderController.deleteOrder
);

module.exports = route;
