const DataTypes = require("sequelize");
const db = require("../config/db");

//Create Schema
const Post = db.define("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  text: {
    type: DataTypes.STRING,
  },

  name: {
    type: DataTypes.STRING,
  },

  avatar: {
    type: DataTypes.STRING,
  },

  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: true,
  },

  postLikes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: true,
  },

  comments: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
    allowNull: true,
  },

  userId: {
    type: DataTypes.INTEGER,
  },
});

Post.associate = (models) => {
  Post.belongsTo(models.User, {
    foreighKey: "userId",
    onDelete: "CASCADE",
  });
};

module.exports = Post;
