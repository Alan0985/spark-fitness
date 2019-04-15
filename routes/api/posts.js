const express = require("express");
const router = express.Router();

//route     GET /api/posts/test
//Desc      Test posts route
//Access    Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
