const express = require("express");
const router = express.Router();
const Team = require("../../models/Team");

router.get("/", (req, res) => {
  Team.findAll()
    .then((team) => res.send(team))
    .catch((err) => console.log("Error: " + err));
});

router.post("/add", (req, res) => {
  const data = {
    name: "Jane",
    title: "Trainer",
    avatar:
      "https://res.cloudinary.com/dgmvfyzua/image/upload/v1558946524/avatar_lizzy_mdz551.jpg",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  let { name, title, avatar, description } = data;

  Team.create({ name, title, avatar, description })
    .then((team) => res.send(team))
    .catch((err) => console.log("Error: " + err));
});

module.exports = router;
