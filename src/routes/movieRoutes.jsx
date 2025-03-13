const express = require("express");
const axios = require("axios");
const Movie = require("./models/Movie");
require("dotenv").config();

const router = express.Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// 🔍 Search Movies from TMDb
router.get("/search/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error });
  }
});

// 📌 Add a Movie to Wishlist
router.post("/wishlist", async (req, res) => {
  const { title, tmdbId, posterPath, releaseDate } = req.body;

  try {
    const movie = new Movie({ title, tmdbId, posterPath, releaseDate });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error adding movie", error });
  }
});

// 📜 Get Wishlist
router.get("/wishlist", async (req, res) => {
  try {
    const wishlist = await Movie.find();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wishlist", error });
  }
});

// ❌ Remove Movie from Wishlist
router.delete("/wishlist/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting movie", error });
  }
});

module.exports = router;
