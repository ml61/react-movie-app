import React, { useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import MainSingleMovieDescription from "../components/MainSingleMovieDescription";
import FormRandomMovie from "../components/FormRandomMovie";

import axios from "axios";
import { api_key, URL } from "../DataAPI";

const RandomMovie = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [yearOption, setYearOption] = useState("Year not earlier than");
  const [ratingOption, setRatingOption] = useState("Rating not less than");
  const [chosenGenreId, setChosenGenreId] = useState(1);

  const [generatedMovieId, setGeneratedMovieId] = useState(522627);

  const api = axios.create({ baseURL: URL });

  const handleYear = (year) => {
    setYearOption(year);
  };
  const handleRating = (rating) => {
    setRatingOption(rating);
  };
  const handleGenre = (genreId) => {
    setChosenGenreId(genreId);
  };

  const queryParams = {
    minYear: yearOption,
    minRating: ratingOption,
    genreId: chosenGenreId,
  };

  const getMovieListOfChosenGenre = (minYear, minRating, genreId, page = 1) => {
    return api.get("/discover/movie", {
      params: {
        api_key,
        with_genres: genreId,
        "vote_average.gte": minRating,
        "primary_release_date.gte": minYear + "-01-01",
        "vote_count.gte": 1000,
        page: page,
      },
    });
  };
  const getMovieListOfAllGenres = (minYear, minRating, page = 1) => {
    return api.get("/discover/movie", {
      params: {
        api_key,
        "vote_average.gte": minRating,
        "primary_release_date.gte": minYear + "-01-01",
        "vote_count.gte": 1000,
        page: page,
      },
    });
  };

  const submitQueries = async ({ minYear, minRating, genreId }) => {
    setLoading(true);
    let pageNumber = 1;
    let response;
    try {
      if (genreId == 1) {
        response = await getMovieListOfAllGenres(
          minYear,
          minRating,
          pageNumber
        );
      } else {
        response = await getMovieListOfChosenGenre(
          minYear,
          minRating,
          genreId,
          pageNumber
        );
      }
      const { data } = response;

      let { total_results: totalResults } = data;
      if (!totalResults) {
        let err = {
          message: "We have not any results, please change your request.",
        };
        throw err;
      }
      let randomResultPosition = Math.floor(Math.random() * totalResults);
      pageNumber = Math.floor(randomResultPosition / 20 + 1);
      randomResultPosition = randomResultPosition - (pageNumber - 1) * 20;

      let responseFinal;
      if (genreId == 1) {
        responseFinal = await getMovieListOfAllGenres(
          minYear,
          minRating,
          pageNumber
        );
      } else {
        responseFinal = await getMovieListOfChosenGenre(
          minYear,
          minRating,
          genreId,
          pageNumber
        );
      }
      const { results } = responseFinal.data;
      setError(false);
      setGeneratedMovieId(results[randomResultPosition].id);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleCurrentGenre = (value) => {
    return;
  };

  if (loading) return <Loading />;

  return (
    <>
      <FormRandomMovie
        handleYear={handleYear}
        handleRating={handleRating}
        handleGenre={handleGenre}
        submitQueries={submitQueries}
        queryParams={queryParams}
        yearOption={yearOption}
        ratingOption={ratingOption}
        chosenGenreId={chosenGenreId}
      />
      <div className="flex-container-movie">
        {/* <GenresBar currentGenre={currentGenre} handleGenre={handleGenre} /> */}

        {error ? (
          <Error err={error} />
        ) : (
          <MainSingleMovieDescription
            id={generatedMovieId}
            handleCurrentGenre={handleCurrentGenre}
          />
        )}
      </div>
    </>
  );
};

export default RandomMovie;
