
import "./App.css";
import Nav from "./components/navbar";
import Hero from "./pages/hero";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Footer from "./components/footer";

function Apps() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Pricing/>
    <Services/>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
    
    
   

    </>
  );
};
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "./app.css";

const API_KEY = "your_actual_api_key";  // Replace this with your key
const API_URL = "https://api.themoviedb.org/3/search/movie";

const Home = () => {
  const API_BASE = "http://localhost:5000/api/movies"; 
  const [query, setQuery] = useState(""); // ✅ Define query state
  const [movies, setMovies] = useState([]); // Backend URL

// 🔍 Search Movies from Backend
const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_BASE}/search/${query}`);
    setMovies(response.data);
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};

// 📌 Add Movie to Wishlist
const addToWishlist = async (movie) => {
  try {
    await axios.post(`${API_BASE}/wishlist`, {
      title: movie.title,
      tmdbId: movie.id,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
    });
    alert("Movie added to wishlist!");
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

// 📜 Get Wishlist
const fetchWishlist = async () => {
  try {
    const response = await axios.get(`${API_BASE}/wishlist`);
    setWishlist(response.data);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
  }
};

// ❌ Remove Movie from Wishlist
const removeFromWishlist = async (id) => {
  try {
    await axios.delete(`${API_BASE}/wishlist/${id}`);
    fetchWishlist(); // Refresh wishlist
  } catch (error) {
    console.error("Error removing from wishlist:", error);
  }
};


  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold">🎬 Movie Wish List</h1>
      <input
        type="text"
        className="border p-2 mt-4 w-full rounded-md"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => searchMovies(query)}>Search</button>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <button className="bg-green-500 text-white px-3 py-1 rounded mt-2" onClick={() => addToWishList(movie)}>
              Add to Wish List
            </button>
          </div>
        ))}
      </div>
      
      <Link to="/wishlist" className="mt-6 block text-blue-500 underline">Go to Wish List</Link>
    </div>
  );
};

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    // Retrieve wish list from local storage
    const storedList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedList);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold">⭐ My Wish List</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {wishList.map((movie, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold">{movie.title}</h2>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-6 block text-blue-500 underline">Back to Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </Router>
  );
};

export default App;
