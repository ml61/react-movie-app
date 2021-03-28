import React, { useEffect, useState } from "react";
import SingleFormOption from "./SingleFormOption";
import axios from "axios";

import { api_key, URL } from "../DataAPI";

const FormRandomMovie = ({
  handleYear,
  handleRating,
  handleGenre,
  submitQueries,
  queryParams,
  yearOption,
  ratingOption,
  chosenGenreId,
}) => {
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [rating, setRating] = useState([]);

  const api = axios.create({ baseURL: URL });

  const getGenres = async () => {
    const response = await api.get("/genre/movie/list", {
      params: { api_key },
    });
    let genresRes = response.data.genres.map((item) => item);
    const allGenres = { id: 1, name: "All genres" };
    genresRes.unshift(allGenres);
    setGenres(genresRes);
  };

  const getYears = () => {
    let movieYears = [];
    for (let i = new Date().getFullYear(); i > 1979; i--) {
      movieYears.push(i);
    }
    movieYears.unshift("Year not earlier than");
    setYears(movieYears);
  };
  const getRating = () => {
    let ratingValues = [];
    for (let i = 9; i > 4; i -= 0.5) {
      ratingValues.push(i);
    }
    ratingValues.unshift("Rating not less than");
    setRating(ratingValues);
  };

  useEffect(() => {
    getGenres();
    getYears();
    getRating();
  }, []);

  return (
    <form className="form-inline d-flex justify-content-center align-items-center">
      <div className="select-item mx-2">
        <select
          className="form-select text-light bg-dark border-0"
          aria-label="Default select example"
          value={chosenGenreId}
          onChange={(e) => {
            handleGenre(e.target.value);
          }}
        >
          {genres.map((genre) => {
            return <SingleFormOption option={genre.name} value={genre.id} />;
          })}
        </select>
      </div>
      <div className="select-item mx-2">
        <select
          className="form-select text-light bg-dark border-0"
          aria-label="Default select example"
          value={yearOption}
          onChange={(e) => {
            handleYear(e.target.value);
          }}
        >
          {years.map((year) => {
            return <SingleFormOption option={year} value={year} />;
          })}
        </select>
      </div>
      <div className="select-item mx-2">
        <select
          className="form-select text-light bg-dark border-0"
          aria-label="Default select example"
          value={ratingOption}
          onChange={(e) => {
            handleRating(e.target.value);
          }}
        >
          {rating.map((rating) => {
            return <SingleFormOption option={rating} value={rating} />;
          })}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-dark mx-2 p-2"
        onClick={(e) => {
          e.preventDefault();
          submitQueries(queryParams);
        }}
      >
        Generate random movie
      </button>
    </form>
  );
};

export default FormRandomMovie;
