const sequelize = require("sequelize");
const keys = require("../key/keys");

module.exports = new sequelize(keys.dbName, keys.dbUserName, keys.dbPWD, {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
