const express = require("express");
const router = express.Router();
const passport = require("passport");

const Post = require("../../models/Post");
const User = require("../../models/User");

//route     POST /api/posts
//Desc      Add one post
//Access    Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const newPost = {
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar,
      images: req.body.images,
      postLikes: [],
      comments: [],
    };

    // const newPost = {
    //   text: "Test AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAA",
    //   name: "ALen",
    //   avatar:
    //     "https://res.cloudinary.com/dgmvfyzua/image/upload/v1558149427/avatar_default_ex0t7c.svg",
    //   images: [
    //     "https://res.cloudinary.com/dgmvfyzua/image/upload/v1628816912/tp6r806kwkrouobiibby.jpg",
    //     "https://res.cloudinary.com/dgmvfyzua/image/upload/v1628816916/geoqkfmwv25nbooqbcfm.jpg",
    //     "https://res.cloudinary.com/dgmvfyzua/image/upload/v1628816942/mrpzni9rmyzhmg2jmkm9.jpg",
    //   ],
    //   postLikes: [],
    //   comments: [],
    // };

    try {
      const post = await Post.create(newPost);
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
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
      .then((post) => {
        post.remove().then((res) => {
          res.json({ Success: true });
        });
      })
      .catch((err) =>
        res.status(400).json({ msg: "ooops, something wrong here" })
      );
  }
);

//route     GET /api/posts/:id
//Desc      Get one post
//Access    Private
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById({ WHERE: { id: req.params.id } });
    if (!post) {
      return res.status(404).json({ msg: "No Post Found" });
    }
    return res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//route     GET /api/posts
//Desc      Get all posts
//Access    Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const posts = await Post.findAll({ order: [["createdAt", "DESC"]] });
      if (posts.length === 0) {
        return res.status(404).json({ msg: "No Post Found" });
      }
      return res.json(posts);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

//route     POST /api/posts/like/:id
//Desc      Like or Unlike a post
//Access    Private
router.post(
  "/like/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.postId).then((post) => {
      if (
        //Check if the post is liked or not
        post.postLikes.filter((like) => like.user.toString() === req.user.id)
          .length === 0
      ) {
        //Add user id to postLikes array
        post.postLikes.unshift({ user: req.user.id });
      } else {
        //Get index and remove user id from postLikes array
        const index = post.postLikes
          .map((like) => like.user.toString())
          .indexOf(req.user.id);
        post.postLikes.splice(index, 1);
      }

      post.save().then((post) => res.json(post));
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
      .then((post) => {
        const newComment = {
          user: req.user.id,
          name: req.user.name,
          avatar: req.user.avatar,
          text: req.body.text,
        };
        post.comments.unshift(newComment);
        post.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).json({ NotFound: "Post Not Found" }));
  }
);

//route     DELETE /api/posts/comment/:postId/:commentId
//Desc      Delete a comment
//Access    Private
router.delete(
  "/comment/:postId/:commentId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.postId).then((post) => {
      const index = post.comments
        .map((comment) => comment._id.toString())
        .indexOf(req.params.commentId);
      post.comments.splice(index, 1);
      post.save().then((post) => res.json(post));
    });
  }
);

module.exports = router;
