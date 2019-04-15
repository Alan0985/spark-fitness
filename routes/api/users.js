const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../key/keys");
const passport = require("passport");

const User = require("../../models/User");

//route     GET /api/users/test
//Desc      Test users route
//Access    Private
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//route     POST /api/users/signUp
//Desc      SignUp users route
//Access    Public
router.post("/signUp", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "This Email has been taken." });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: "TouXiang",
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
router.post("/signIn", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      return res
        .status(404)
        .json({ email: "Please input the correct user information" });
    } else {
      //If user exists, check the password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //Token Payload
          const payload = {
            id: user.id,
            email: user.email,
            password: user.password
          };

          //Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ password: "Please input the correct user information" });
        }
      });
    }
  });
});

//route     GET /api/users/current
//Desc      Return current use
//Access    Private
router.get(
  "/current",
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
