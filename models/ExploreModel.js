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
      type: { type: String },
      summary: { type: String },
      yesFranchise: [{ type: String }],
      noFranchise: [{ type: String }]
    }
  ],

  training: [
    {
      catagory: {
        type: String
      },

      summary: {
        type: String
      },

      classes: [
        {
          id: {
            type: String
          },

          name: {
            type: String
          },

          level: {
            type: Number
          },

          duraion: {
            type: Number
          },

          enrollQty: {
            type: Number
          },

          hot: {
            type: Number
          }
        }
      ]
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
