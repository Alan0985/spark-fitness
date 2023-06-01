const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../../config/db");

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
      userId: req.user.id,
    };

    try {
      const post = await Post.create(newPost);
      res.json(post);
    } catch (err) {
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
  async (req, res) => {
    try {
      const deleteCount = await Post.destroy({
        where: { id: req.params.postId },
      });

      if (deleteCount === 0) {
        return res.status(404).json({ msg: "Post not found" });
      }

      return res.json({ msg: "Post Deleted Successfully" });
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

//route     GET /api/posts/:id
//Desc      Get one post
//Access    Private
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
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
  async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user.id;
    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ msg: "Post Not Found" });
      }
      if (
        //Check if the post is liked or not
        post.postLikes.filter((id) => parseFloat(id) === userId).length === 0
      ) {
        const updatedPostLikes = [...post.postLikes, userId];
        await Post.update(
          {
            postLikes: db.literal(`ARRAY['${updatedPostLikes.join("','")}']`),
          },
          { where: { id: postId } }
        );

        return res.json({ msg: "Post Liked Successfully" });
      } else {
        const updatedPostLikes = post.postLikes.filter(
          (id) => parseFloat(id) !== userId
        );

        await Post.update(
          {
            postLikes: db.literal(`ARRAY['${updatedPostLikes.join("','")}']`),
          },
          { where: { id: postId } }
        );

        return res.json({ msg: "Post unliked Successfully" });
      }
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

//route     POST /api/posts/comments/:id
//Desc      Add Comment
//Access    Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const postId = req.params.id;
    const comment = req.body;

    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ msg: "No post found" });
      }

      const updatedComments = [...post.comments, comment];

      await Post.update(
        {
          comments: updatedComments,
        },
        { where: { id: postId } }
      );

      return res.json({ msg: "Comment Added Successfully" });
    } catch (err) {
      return res.status(500).json({ msg: "Server Error" });
    }
  }
);

//route     DELETE /api/posts/comment/:postId/:commentId
//Desc      Delete a comment
//Access    Private
router.delete(
  "/comment/:postId/:commentId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findByPk(req.params.postId).then((post) => {
      const index = post.comments
        .map((comment) => comment._id.toString())
        .indexOf(req.params.commentId);
      post.comments.splice(index, 1);
      post.save().then((post) => res.json(post));
    });
  }
);

module.exports = router;
