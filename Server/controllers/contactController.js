const { handleErrors } = require("../utils/helpers");
const { User } = require("../models/Users");
const sendMailReclamationConfirmation = require("../mails/reclamation");
const sendMailContact = require("../mails/contactMail");
const controller = {
  //Get all order
  reclamationFromUser: async (req, res) => {
    try {
      //Vérification du token
      let compteExiste = await User.findOne({ _id: req.user.id });

      if (!compteExiste) {
        return handleErrors(res, 403, {
          message: " Utilisateur inexistant ",
        });
      }
      const { nom, email, message, commande } = req.body;

      // Envoyer le mail à l'utilisateur + admin
      sendMailReclamationConfirmation(email, {
        nom,
        email,
        message,
        commande,
      });

      return handleErrors(res, 200, {
        message: "Votre reclamation a bien été envoyée",
      });
    } catch (error) {
      return handleErrors(res, 400, {
        message: error.message,
      });
    }
  },

  //Contact
  contactFromFormulaire: async (req, res) => {
    try {

      const { nom, email, message } = req.body;

      // Envoyer le mail à l'admin
      sendMailContact(email, { nom, email, message });

      return handleErrors(res, 200, {
        message: "Votre message a bien été envoyé",
      })
    } catch (error) {

      return handleErrors(res, 400, {
        message: error.message,
      });
      
    }

  },
};

module.exports = controller;
