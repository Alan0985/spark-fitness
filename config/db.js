const sequelize = require("sequelize");

module.exports = new sequelize("spark", "postgres", "Post_123", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
