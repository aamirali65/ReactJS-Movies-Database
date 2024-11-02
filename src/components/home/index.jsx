// Home.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = "271e7c2a";

  const fetchMovies = async (search) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchMovies(searchTerm);
  };

  return (
    <div className="main w-full h-screen px-5 py-10">
      <div className="heading flex flex-col justify-center items-center gap-5 mb-5">
        <h1 className="text-white text-4xl uppercase">
          The Movie <strong className="italic text-red-600">Library</strong> - Developed by Aamir Ali
        </h1>
      </div>
      <form className="flex gap-2 justify-center items-center search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search the Movie"
          className="w-full px-5 border text-white text-xl border-white outline-none py-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-red-700 text-white px-5 py-4">
          Search
        </button>
      </form>
      {loading ? (
        <div className="text-white text-center">Loading movies...</div>
      ) : (
        <div className="box-section mt-3 flex flex-wrap gap-5">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Link to={`/movie/${movie.imdbID}`} state={{ movie }} key={movie.imdbID}>
                <div className="card border border-1px w-[250px] h-[100%] cursor-pointer">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                    className="w-[250px] h-[350px] object-cover"
                    alt={movie.Title}
                  />
                  <div className="context p-3 text-white text-center">
                    <h1 className="text-2xl font-semibold">{movie.Title}</h1>
                    <h1 className="text-[14px]">{movie.Year}</h1>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="main-dev flex justify-center items-center w-full h-screen">
              <h1 className="text-white text-center">No movies found</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
