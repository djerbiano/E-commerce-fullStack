const express = require("express");
const controller = require("../controllers/reclamationController");
const virifyToken = require("../middlewares/virifyToken");
const route = express.Router();


// Get all reclamation
route.get("/", virifyToken, controller.getAllReclamation);

// Get one reclamation
route.get("/oneReclamation/:reclamId", virifyToken, controller.getOneReclamation);


// Update Réclamation
route.post("/:reclamationId", virifyToken, controller.updateReclamation);

module.exports = route;
