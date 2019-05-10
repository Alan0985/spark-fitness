const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExploreSchema = new Schema({
  team: [
    {
      name: { type: String },
      avatar: { type: String },
      title: { type: String },
      description: { type: String }
    }
  ],

  membership: [
    {
      option: { type: String }
    }
  ],

  pt: [
    {
      name: { type: String },
      avatar: { type: String },
      title: { type: String },
      description: { type: String }
    }
  ],

  contact: [
    {
      name: {
        type: String,
        required: true
      },

      email: {
        type: String,
        required: true
      },

      text: {
        type: String,
        required: true
      },

      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = ExploreModel = mongoose.model("explores", ExploreSchema);
