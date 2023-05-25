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
router.post("/me/signUp", async (req, res) => {
  try {
    const { errors, isValid } = validateSignUpInput(req.body);

    //Validate
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { name, email, sfid, weight, password } = req.body;

    await User.findOne({ where: { email: email } }).then((user) => {
      if (user) {
        errors.email = "This Email has been taken.";
        return res.status(400).json(errors);
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;

            User.create({
              name,
              email,
              avatar:
                "https://res.cloudinary.com/dgmvfyzua/image/upload/v1558149427/avatar_default_ex0t7c.svg",
              cover:
                "https://res.cloudinary.com/dgmvfyzua/image/upload/v1558150786/cover_default_euagoq.jpg",
              sfid: "-",
              weight,
              password: hash,
            })
              .then((user) => res.send(user))
              .catch((err) => console.log(err));
          });
        });
      }
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//route     POST /api/users/signIn
//Desc      SignIn user / Return the JWT
//Access    Public
router.post("/me/signIn", async (req, res) => {
  const { errors, isValid } = validateSignInInput(req.body);
  //Validate
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  //Find user by email
  await User.findOne({ where: { email: email } }).then((user) => {
    //Check for user
    if (!user) {
      errors.email = "User not found, please Sign Up first";
      return res.status(404).json(errors);
    } else {
      //If user exists, check the password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          //Token Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            cover: user.cover,
            sfid: user.sfid,
            weight: user.weight,
            password: user.password,
          };

          //Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 10800 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          errors.password = "Either Username or Password is not correct";
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
  async (req, res) => {
    await User.findOne({ where: { email: req.user.email } })
      .then((user) => res.json(user))
      .catch((err) => res.status(404).json(err));
  }
);

//route     POST /api/profile/me/editProfile
//Desc      Update User Info
//Access    Private
router.post(
  "/me/editProfile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateNewUserInfo(req.body);
    //Validate
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { name, avatar, cover, sfid, weight } = req.body;

    await User.findOne({ where: { email: req.user.email } })
      .then((user) => {
        if (user) {
          user.update({ name, avatar, cover, sfid, weight }).then((newUser) => {
            res.json(newUser);
          });
        } else {
          console.log("User not found.");
        }
      })
      .catch((err) => res.status(404).json(err));
  }
);

//route     GET /api/users/me
//Desc      Return current user
//Access    Private
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id, name, email } = req.user;
    res.json({ id, name, email });
  }
);

module.exports = router;
