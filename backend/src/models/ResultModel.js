const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Game Results Schema and Model
const ResultSchema = new Schema(
  {
    teamId: {
      type: Number,
      required: [true, 'Please enter a TeamID']
    },
    gameId: {
      type: Number,
      required: [true, 'Please enter a GameID']
    },
    homeTeamId: {
      type: Number,
      required: true,
    },
    homeTeamScore: {
      type: Number,
      required: true,
    },
    visitorTeamId: {
      type: Number,
      required: true,
    },
    visitorTeamScore: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
