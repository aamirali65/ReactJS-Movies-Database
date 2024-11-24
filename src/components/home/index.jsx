// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const TMDB_API_KEY = "40a2f20c501b771e2a54c130daac4f74";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    if (searchTerm) {
      handleSearch(null, currentPage);
    } else {
      fetchPopularMovies(currentPage);
    }
  }, [currentPage]);

  const fetchPopularMovies = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(Math.min(data.total_pages, 500));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
    setLoading(false);
  };

  const handleSearch = async (e, page = 1) => {
    if (e) e.preventDefault();
    if (!searchTerm && e) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(Math.min(data.total_pages, 500));
      setCurrentPage(page);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
    setLoading(false);
  };

  const Pagination = () => {
    const pageNumbers = [];
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + 4, totalPages);
    
    if (endPage - startPage < 4) {
      startPage = Math.max(endPage - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-8 mb-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          Previous
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1 ? 'bg-red-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="text-white">...</span>}
          </>
        )}

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === number
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-white">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages ? 'bg-red-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            The Movie <span className="text-red-600 italic">Library</span>
          </h1>
          <p className="text-gray-400">Developed by Aamir Ali</p>
        </div>

        {/* Search Section */}
        <form className="max-w-3xl mx-auto mb-12" onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search for movies..."
              className="flex-1 px-6 py-4 bg-gray-800 text-white rounded-lg border border-gray-700 
                         focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none
                         transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 
                         transition-colors duration-300 font-semibold"
            >
              Search
            </button>
          </div>
        </form>

        {/* Movies Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-white text-xl">Loading movies...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <Link 
                    to={`/movie/${movie.id}`} 
                    state={{ movie }} 
                    key={movie.id}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                      <div className="aspect-[2/3] relative">
                        <img
                          src={movie.poster_path 
                            ? `${IMAGE_BASE_URL}${movie.poster_path}`
                            : "https://via.placeholder.com/400"}
                          className="w-full h-full object-cover"
                          alt={movie.title}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <h2 className="text-white text-lg font-semibold line-clamp-2 mb-1">
                          {movie.title}
                        </h2>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            {movie.release_date?.split('-')[0]}
                          </span>
                          <span className="text-xs px-2 py-1 bg-red-600 text-white rounded-full">
                            {movie.vote_average.toFixed(1)} ★
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center h-64">
                  <div className="text-center">
                    <h2 className="text-white text-xl mb-2">No movies found</h2>
                    <p className="text-gray-400">Try searching for something else</p>
                  </div>
                </div>
              )}
            </div>
            
            {movies.length > 0 && <Pagination />}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
