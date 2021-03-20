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
  const [chosenGenreId, setChosenGenreId] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("Random Genre");
  const [generatedMovieId, setGeneratedMovieId] = useState("");

  const api = axios.create({ baseURL: URL });

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

  const queryParams = {
    minYear: yearOption,
    minRating: ratingOption,
    genreId: chosenGenreId,
  };

  const submitQueries = async ({ minYear, minRating, genreId }) => {
    setLoading(true);
    // const getList =
    if (genreId === 1) {
      const responseGenres = await api.get("/genre/movie/list", {
        params: { api_key },
      });
      let genreIds = responseGenres.data.genres.map((item) => item.id);
      genreId = genreIds[Math.floor(Math.random() * genreIds.length)];
    }
    try {
      const response = await api.get("/discover/movie", {
        params: {
          api_key,
          with_genres: genreId,
          "vote_average.gte": minRating,
          "primary_release_date.gte": minYear + "-01-01",
          "vote_count.gte": 1000,
        },
      });
      const { data } = response;
      let { total_results: totalResults } = data;
      if (!totalResults) {
        let err =
          "We have not any results, please change your request and try again.";
        throw err;
      }
      let randomResultPosition = Math.floor(Math.random() * totalResults);
      let pageNumber = Math.ceil(randomResultPosition / 20);
      randomResultPosition = randomResultPosition - pageNumber * 20 - 1;

      const responseFinal =
        // setGeneratedMovieId(randomResultPosition.)
        console.log(data, chosenGenreId, randomResultPosition);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <FormRandomMovie
        handleYear={handleYear}
        handleRating={handleRating}
        submitQueries={submitQueries}
        queryParams={queryParams}
      />
      <div class="flex-container-movie">
        <GenresBar currentGenre={currentGenre} handleGenre={handleGenre} />
        {error ? (
          <Error err={error} />
        ) : (
          <MainSingleMovieDescription id={chosenGenreId} />
        )}
        {/* <MainSingleMovieDescription id={chosenGenreId} /> */}
      </div>
    </>
  );
};

export default RandomMovie;
