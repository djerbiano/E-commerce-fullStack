const express = require("express");
const controller = require("../controllers/usersController");
const virifyToken = require("../middlewares/virifyToken");
const mult = require("../middlewares/multer");
const route = express.Router();

//Get all users
route.get("/allUsers", virifyToken, controller.getAll);

//Search user
route.get("/:searchUser", virifyToken, controller.searchUser);

//Get one user
route.get("/:oneUser", virifyToken, controller.getOne);

//Update user
route.patch("/:updateUser", virifyToken, mult, controller.updateUser);

//Delete user
route.delete("/:deleteUser", virifyToken, controller.deleteUser);

module.exports = route;
