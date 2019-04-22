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
      .populate("user", ["name", "email", "avatar", "sfid"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "No Profile";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

//route     POST /api/profile/me/createProfile
//Desc      Create user profile
//Access    Private
router.post("/me/createProfile", (req, res) => {
  //Create New Profile
  const profileData = {};
  profileData.name = req.body.name;
  profileData.email = req.body.email;

  new Profile(profileData).save().then(profile => res.json(profile));
});

// //route     POST /api/profile/me/editProfile
// //Desc      Edit current user profile
// //Access    Private
// router.post(
//   "/me/editProfile",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateProfileInput(req.body);

//     //Validate
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const profileFields = {};
//     profileFields.user = req.user.id;
//     if (req.body.name) profileFields.name = req.body.name;
//     if (req.body.email) profileFields.email = req.body.email;
//     if (req.body.avatar) profileFields.avatar = req.body.avatar;
//     if (req.body.weight) profileFields.weight = req.body.weight;
//     if (req.body.sfid) profileFields.sfid = req.body.sfid;

//     Profile.findOne({ user: req.user.id }).then(profile => {
//       if (profile) {
//         //Update Profile
//         Profile.findOneAndUpdate(
//           { user: req.user.id },
//           { $set: profileFields },
//           { new: true }
//         ).then(profile => res.json(profile));
//       } else {
//         //Create New Profile
//         new Profile(profileFields).save().then(profile => res.json(profile));
//       }
//     });
//   }
// );

module.exports = router;
