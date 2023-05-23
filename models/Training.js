const DataTypes = require("sequelize");
const db = require("../config/db");

const Training = db.define("training", {
  category: {
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  classes: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
    allowNull: true,
  },
});

module.exports = Training;
