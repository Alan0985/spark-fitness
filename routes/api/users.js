const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

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

module.exports = router;
