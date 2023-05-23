const DataTypes = require("sequelize");
const db = require("../config/db");

const Contact = db.define("contact", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
});

module.exports = Contact;
