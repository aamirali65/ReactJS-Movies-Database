// MovieDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const TMDB_API_KEY = "40a2f20c501b771e2a54c130daac4f74";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=credits`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="text-center">Movie not found</div>
      </div>
    );
  }

  return (
    <div className="movie-details min-h-screen bg-gray-900 px-4 py-8 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span className="text-lg font-medium">Back to Movies</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                {movie.release_date?.split('-')[0]}
              </span>
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                {movie.runtime} min
              </span>
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                {movie.vote_average.toFixed(1)} ★
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-xl leading-relaxed">{movie.overview}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {movie.credits?.crew?.find(person => person.job === "Director") && (
                  <div>
                    <h3 className="text-gray-400">Director</h3>
                    <p className="text-lg">
                      {movie.credits.crew.find(person => person.job === "Director").name}
                    </p>
                  </div>
                )}
                <div>
                  <h3 className="text-gray-400">Cast</h3>
                  <p className="text-lg">
                    {movie.credits?.cast?.slice(0, 3).map(actor => actor.name).join(', ')}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-400">Genre</h3>
                  <p className="text-lg">
                    {movie.genres?.map(genre => genre.name).join(', ')}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-400">Budget</h3>
                  <p className="text-lg">
                    ${(movie.budget / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>

              {movie.credits?.cast?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-gray-400">Cast</h3>
                  <p className="text-lg">
                    {movie.credits?.cast?.slice(0, 3).map(actor => actor.name).join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
