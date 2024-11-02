// MovieDetails.js
import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
//   const location = useLocation();
//   const { movie } = location.state;

  return (
    <div className="movie-details w-full h-screen px-5 py-10 text-white">
      <div className="flex justify-center items-center mb-5">
        <h1 className="text-4xl">Venom</h1>
      </div>
      <img src='https://www.tallengestore.com/cdn/shop/products/Tenet-ChristopherNolan-Sci-FiCultClassicHollywoodEnglishMoviePoster_67422110-c8d6-408d-b44b-40dd7b854719.jpg?v=1634645947' className="w-[300px] h-[450px] object-cover mx-auto" />
      <p className="text-xl">Year: </p>
      <p className="text-xl">IMDB ID: </p>
      <p className="text-xl">Plot: </p>
    </div>
  );
};

export default MovieDetails;
