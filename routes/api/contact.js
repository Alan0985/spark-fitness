const express = require("express");
const router = express.Router();
const Contact = require("../../models/Contact");

const validateContactForm = require("../../validation/contactFormValidation");

router.get("/", (req, res) => res.send("Get Contact........."));

router.post("/add", (req, res) => {
  const { errors, isValid } = validateContactForm(req.body);

  //Validate
  if (!isValid) {
    return res.status(400).json(errors);
  }

  let { name, email, text } = req.body;

  Contact.create({ name, email, text })
    .then((contact) => res.send(contact))
    .catch((err) => console.log("Error: " + err));
});

module.exports = router;
