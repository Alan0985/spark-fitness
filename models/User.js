const DataTypes = require("sequelize");
const db = require("../config/db");

//Create Schema
const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  cover: {
    type: DataTypes.STRING,
  },
  sfid: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.NUMBER,
  },
});

module.exports = User;
