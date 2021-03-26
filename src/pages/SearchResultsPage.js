import React, { useEffect, useState } from "react";
import FavouritePostersContainer from "../components/FavouritePostersContainer";
import GenresBar from "../components/GenresBar";
import { useGlobalContext } from "../context";

import axios from "axios";
import { api_key, URL } from "../DataAPI";

const SearchResultsPage = () => {
  const { finalQuery } = useGlobalContext();
  const [searchMovies, setSearchMovies] = useState([]);

  //     let search = window.location.search;
  //   let params = new URLSearchParams(search);
  //   let term = params.get("query");

  const api = axios.create({ baseURL: URL });

  const getSearchMovies = async () => {
    const response = await api.get("/search/movie", {
      params: { api_key, query: finalQuery },
    });
    const { results } = response.data;

    let movies = results.map((movie) => {
      let {
        title,
        vote_average: rating,
        overview,
        release_date: year,
        poster_path: image,
        id,
      } = movie;

      const newMovie = {
        title,
        rating,
        overview,
        year,
        image,
        id,
      };
      return newMovie;
    });
    setSearchMovies(movies);
  };

  useEffect(() => {
    getSearchMovies();
  }, [finalQuery]);

  return (
    <div class="my-flex-container">
      <GenresBar />
      <div class="my-flex-item-posters">
        <div class="d-flex justify-content-center mb-3">
          <h1>Searching "{finalQuery}"</h1>
        </div>
        <FavouritePostersContainer movies={searchMovies} />
      </div>
    </div>
  );
};

export default SearchResultsPage;
