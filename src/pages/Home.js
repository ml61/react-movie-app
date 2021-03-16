import React, { useState } from "react";
import SliderHome from "../components/SliderHome";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Home = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div className="my-container">
      <div className="section-random-movie">
        <h1 className="big-h1">SEARCH FOR YOUR ENTERTAINMENT</h1>
        <h2>Let us to find the best movie for you</h2>
        <Link
          to="/random-movie"
          className="massive ui black button btn-find-now"
        >
          find now
        </Link>
      </div>
      <div className="popular-movies-footer">
        <h3>Popular</h3>
        <SliderHome />
      </div>
    </div>
  );
};

export default Home;
