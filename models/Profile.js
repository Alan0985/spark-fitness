const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  name: {
    type: String
  },

  email: {
    type: String
  },

  avatar: {
    type: String
  },

  sfid: {
    type: String
  },

  weight: {
    type: Number
  }
});

// const ProfileSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "users"
//   },

//   weight: {
//     type: Number
//   }
// });

module.exports = Profile = mongoose.model("profile", ProfileSchema);
