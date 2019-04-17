const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Validation
const validateProfileInput = require("../../validation/profileValidation");

//Load User Model and Profile Model
const User = require("../../models/User");
const Profile = require("../../models/Profile");

//route     GET /api/profile/me/editProfile
//Desc      Get current user profile
//Access    Private
router.get(
  "/me/editProfile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "email"])
      .then(profile => {
        if (!profile) {
          return res.status(404).json({ errors: "No Profile" });
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

//route     POST /api/profile/me/editProfile
//Desc      Get current user profile
//Access    Private
router.post(
  "/me/editProfile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    //Validate
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.name) profileFields.name = req.body.name;
    if (req.body.email) profileFields.email = req.body.email;
    if (req.body.weight) profileFields.weight = req.body.weight;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //Update Profile
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //Create New Profile
        new Profile(profileFields).save().then(profile => res.json(profile));
      }
    });
  }
);

module.exports = router;
