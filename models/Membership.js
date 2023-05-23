const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Membership = db.define("membership", {
  membershipOption: {
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  yesFranchise: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: true,
  },
  noFranchise: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: true,
  },
});

module.exports = Membership;
