import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MovieDetails from "./components/detail";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<MovieDetails />} />
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </>
  );
};

export default App;
