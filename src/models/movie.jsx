const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tmdbId: { type: String, required: true },
  posterPath: { type: String },
  releaseDate: { type: String },
});

module.exports = mongoose.model("Movie", movieSchema);
