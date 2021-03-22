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

  const submitQueries = async ({ minYear, minRating, genreId }) => {
    setLoading(true);

    const getList = async (page = 1) => {
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

    if (genreId === 1) {
      const responseGenres = await api.get("/genre/movie/list", {
        params: { api_key },
      });
      let genreIds = responseGenres.data.genres.map((item) => item.id);
      genreId = genreIds[Math.floor(Math.random() * genreIds.length)];
    }
    try {
      const response = await getList();
      const { data } = response;

      let { total_results: totalResults } = data;
      if (!totalResults) {
        let err = {
          message: "We have not any results, please change your request.",
        };
        throw err;
      }
      let randomResultPosition = Math.floor(Math.random() * totalResults);
      let pageNumber = Math.ceil(randomResultPosition / 20);
      randomResultPosition = randomResultPosition - (pageNumber - 1) * 20 - 1;
      const responseFinal = await getList(pageNumber);
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
      <div class="flex-container-movie">
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
