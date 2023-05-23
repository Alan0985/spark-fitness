const express = require("express");
const router = express.Router();
const Training = require("../../models/Training");

router.get("/", (req, res) => {
  Training.findAll()
    .then((training) => res.send(training))
    .catch((err) => console.log("Error:" + err));
});

router.post("/add", (req, res) => {
  const data = {
    category: "Group Training",
    summary: "Join The Group Training",
    classes: [
      {
        classId: "gt01",
        title: "Basic Yoga",
        level: 1,
        duration: 6,
        popularity: 5,
        enrollQty: 231,
      },
      {
        classId: "gt02",
        title: "HIIT",
        level: 3,
        duration: 8,
        popularity: 4,
        enrollQty: 87,
      },
      {
        classId: "gt03",
        title: "Yoga Intermediate",
        level: 4,
        duration: 8,
        popularity: 3,
        enrollQty: 53,
      },
      {
        classId: "gt04",
        title: "Cycling Training",
        level: 2,
        duration: 10,
        popularity: 4,
        enrollQty: 98,
      },
      {
        classId: "gt05",
        title: "HIIT Advance",
        level: 4,
        duration: 10,
        popularity: 3,
        enrollQty: 23,
      },
      {
        classId: "gt06",
        title: "Advanced Yoga",
        level: 5,
        duration: 12,
        popularity: 3,
        enrollQty: 43,
      },
    ],
  };

  let { category, summary, classes } = data;

  Training.create({ category, summary, classes })
    .then((training) => res.send(training))
    .catch((err) => console.log("Error:" + err));
});

module.exports = router;
