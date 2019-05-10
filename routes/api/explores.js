const express = require("express");
const router = express.Router();

const Explore = require("../../models/ExploreModel");

const validateContactForm = require("../../validation/contactFormValidation");

//route     GET /api/explore
//Desc      Get Explore Data
//Access    Public
router.get("/", (req, res) => {
  Explore.findById("5cd5254b62c32e4158b4c081")
    .then(explore => res.json(explore))
    .catch(err => res.status(404).json({ msg: "No Data Found" }));
});

//route     POST /api/explore
//Desc      Create a new message
//Access    Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateContactForm(req.body);

  //Validate
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMessage = {
    name: req.body.name,
    email: req.body.email,
    text: req.body.text
  };

  Explore.findById("5cd5254b62c32e4158b4c081")
    .then(explore => {
      explore.contact.unshift(newMessage);
      explore.save().then(explore => res.json(explore));
    })
    .catch(err => res.status(404).json({ msg: "No Data Found" }));
});

module.exports = router;
