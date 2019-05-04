const express = require("express");
const router = express.Router();
const passport = require("passport");

const Post = require("../../models/PostModel");
const User = require("../../models/User");

const validatePostInput = require("../../validation/newPostValidation");

//route     POST /api/posts
//Desc      Add one post
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

//route     GET /api/posts/:id
//Desc      Get one post
//Access    Private
router.get("/:id", (req, res) => {
  Post.findById({ _id: req.params.id })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ msg: "No Post Found" }));
});

//route     GET /api/posts
//Desc      Get all posts
//Access    Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ msg: "No Post Found" }));
  }
);

//route     POST /api/posts/like/:id
//Desc      Like a post
//Access    Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
      Post.findById(req.params.id).then(post => {
        //Add user id to postLikes array
        post.postLikes.unshift({ user: req.user.id });
        post.save().then(post => res.json(post));
      });
    });
  }
);

//route     POST /api/posts/unlike/:id
//Desc      Unlike a post
//Access    Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
      Post.findById(req.params.id).then(post => {
        //Remove user id from postLikes array
        const index = post.postLikes
          .map(like => like.user)
          .indexOf(req.user.id);
        post.postLikes.splice(index, 1);
        post.save().then(post => res.json(post));
      });
    });
  }
);

module.exports = router;
