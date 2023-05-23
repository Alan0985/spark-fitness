const DataTypes = require("sequelize");
const db = require("../config/db");

const Team = db.define("teams", {
  name: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Team;
