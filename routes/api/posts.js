const express = require("express");
const router = express.Router();

const Post = require("../../models/PostModel");

//route     GET /api/posts
//Desc      Get all posts
//Access    Private
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ msg: "No Post Found" }));
});

module.exports = router;
