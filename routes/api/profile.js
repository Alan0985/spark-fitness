const express = require("express");
const router = express.Router();

//route     GET /api/profile/test
//Desc      Test profile route
//Access    Private
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
