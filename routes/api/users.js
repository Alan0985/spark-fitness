const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../key/keys");
const passport = require("passport");

//Load User Model
const User = require("../../models/User");

//Input Validation
const validateSignUpInput = require("../../validation/signUpValidation");
const validateSignInInput = require("../../validation/signInValidation");
const validateNewUserInfo = require("../../validation/newUserInfoValidation");

//route     POST /api/users/signUp
//Desc      SignUp users route
//Access    Public
router.post("/me/signUp", (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);

  //Validate
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "This Email has been taken.";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: "https://www.sweetasnz.ml/avatar/avatar_default.svg",
        sfid: req.body.sfid,
        weight: req.body.weight,
        password: req.body.password,
        password2: req.body.password2
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//route     POST /api/users/signIn
//Desc      SignIn user / Return the JWT
//Access    Public
router.post("/me/signIn", (req, res) => {
  const { errors, isValid } = validateSignInInput(req.body);
  //Validate
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User not found, please Sign Up first";
      return res.status(404).json(errors);
    } else {
      //If user exists, check the password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //Token Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            sfid: user.sfid,
            weight: user.weight,
            password: user.password
          };

          //Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 10800 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password is not correct";
          return res.status(400).json(errors);
        }
      });
    }
  });
});

//route     GET /api/profile/me/editProfile
//Desc      Get User Info
//Access    Private
router.get(
  "/me/editProfile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ email: req.user.email })
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  }
);

//route     POST /api/profile/me/editProfile
//Desc      Update User Info
//Access    Private
router.post(
  "/me/editProfile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateNewUserInfo(req.body);
    //Validate
    if (!isValid) {
      return res.status(400).json(errors);
    }

    let newUserFields = {};
    newUserFields = req.user;
    if (req.body.name) newUserFields.name = req.body.name;
    if (req.body.email) newUserFields.email = req.body.email;
    if (req.body.avatar) newUserFields.avatar = req.body.avatar;
    if (req.body.weight) newUserFields.weight = req.body.weight;
    if (req.body.sfid) newUserFields.sfid = req.body.sfid;

    //Update User Info
    User.findOneAndUpdate(
      { email: req.user.email },
      { $set: newUserFields },
      { new: true }
    )
      .then(newUser => {
        res.json(newUser);
      })
      .catch(err => res.status(404).json(err));
  }
);

//route     GET /api/users/me
//Desc      Return current user
//Access    Private
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
