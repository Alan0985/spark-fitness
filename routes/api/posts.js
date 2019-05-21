const express = require("express");
const router = express.Router();
const passport = require("passport");

const Post = require("../../models/PostModel");
const User = require("../../models/User");

//route     POST /api/posts
//Desc      Add one post
//Access    Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar,
      images: req.body.images,
      user: req.user.id
    });
    newPost.save().then(post => res.json(post));
  }
);

//route     DELETE /api/posts/:postId
//Desc      Delete a post
//Access    Private
router.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.postId)
      .then(post => {
        post.remove().then(res => {
          res.json({ Success: true });
        });
      })
      .catch(err =>
        res.status(400).json({ msg: "ooops, something wrong here" })
      );
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
//Desc      Like or Unlike a post
//Access    Private
router.post(
  "/like/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.postId).then(post => {
      if (
        //Check if the post is liked or not
        post.postLikes.filter(like => like.user.toString() === req.user.id)
          .length === 0
      ) {
        //Add user id to postLikes array
        post.postLikes.unshift({ user: req.user.id });
      } else {
        //Get index and remove user id from postLikes array
        const index = post.postLikes
          .map(like => like.user.toString())
          .indexOf(req.user.id);
        post.postLikes.splice(index, 1);
      }

      post.save().then(post => res.json(post));
    });
  }
);

//route     POST /api/posts/comments/:id
//Desc      Add Comment
//Access    Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          user: req.user.id,
          name: req.user.name,
          avatar: req.user.avatar,
          text: req.body.text
        };
        post.comments.unshift(newComment);
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ NotFound: "Post Not Found" }));
  }
);

//route     DELETE /api/posts/comment/:postId/:commentId
//Desc      Delete a comment
//Access    Private
router.delete(
  "/comment/:postId/:commentId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.postId).then(post => {
      const index = post.comments
        .map(comment => comment._id.toString())
        .indexOf(req.params.commentId);
      post.comments.splice(index, 1);
      post.save().then(post => res.json(post));
    });
  }
);

module.exports = router;
