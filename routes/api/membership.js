const express = require("express");
const router = express.Router();
const Membership = require("../../models/Membership");

router.get("/", (req, res) => {
  Membership.findAll()
    .then((membership) => res.send(membership))
    .catch((err) => console.log("Error: " + err));
});

router.post("/add", (req, res) => {
  const data = {
    membershipOption: "Prepay",
    summary: "$11.99/WK, Flexible & All Included",
    yesFranchise: [
      "Access to all club locations",
      "Workout 24 hours / 7 days",
      "30-minute Express Circuit",
      "Access to all equipments",
      "Free fitness orientation",
      "Flexibility to cancel anytime",
      "Family membership",
    ],
    noFranchise: [
      "Free guest access",
      "Access to all group classes",
      "Use of massage chairs",
      "Free gym bag",
    ],
  };

  let { membershipOption, summary, yesFranchise, noFranchise } = data;

  Membership.create({ membershipOption, summary, yesFranchise, noFranchise })
    .then((membership) => res.send(membership))
    .catch((err) => console.log("Error: " + err));
});

module.exports = router;
