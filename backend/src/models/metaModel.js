const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Game Results Schema and Model
const MetaSchema = new Schema(
  {
    numOfRecords: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Meta = mongoose.model('Meta', MetaSchema);

module.exports = Meta;
