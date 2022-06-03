const mongoose = require("mongoose");

const videoGameSchema = mongoose.Schema({
  title: { require: true, type: String },
  multiplayer: { require: true, type: Boolean },
  numberOfPlayers: { require: true, type: Number },
  language: { require: true, type: Array },
  developer: { require: true, type: String },
  genre: { require: true, type: String },
  releaseDate:{require:true, type:String},
});

module.exports = mongoose.model("VideoGameCollection",videoGameSchema);
