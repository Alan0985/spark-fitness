const express = require("express");
const router = express.Router();
const passport = require("passport");

const Post = require("../../models/PostModel");

const validatePostInput = require("../../validation/newPostValidation");

//route     GET /api/posts
//Desc      Get all posts
//Access    Private
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ msg: "No Post Found" }));
});

//route     POST /api/posts
//Desc      Add post
//Access    Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar,
      user: req.user.id
    });
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
