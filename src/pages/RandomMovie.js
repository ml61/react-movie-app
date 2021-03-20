import React, { useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import GenresBar from "../components/GenresBar";
import MainSingleMovieDescription from "../components/SingleMovieComponents/MainSingleMovieDescription";
import FormRandomMovie from "../components/RandomMovieComponents/FormRandomMovie";

import axios from "axios";
import { api_key, URL } from "../DataAPI";

const RandomMovie = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [yearOption, setYearOption] = useState("");
  const [ratingOption, setRatingOption] = useState("");
  const [chosenGenreId, setChosenGenreId] = useState("");
  const [currentGenre, setCurrentGenre] = useState("Random Genre");

  const [details, setDetails] = useState({});

  const handleYear = (year) => {
    setYearOption(year);
  };
  const handleRating = (rating) => {
    setRatingOption(rating);
  };
  const handleGenre = (id, genreName) => {
    setChosenGenreId(id);
    setCurrentGenre(genreName);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <FormRandomMovie handleYear={handleYear} handleRating={handleRating} />
      <div class="flex-container-movie">
        <GenresBar currentGenre={currentGenre} handleGenre={handleGenre} />
        {/* <MainSingleMovieDescription {...details} /> */}
      </div>
    </>
  );
};

export default RandomMovie;
