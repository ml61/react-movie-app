import React, { useCallback, useEffect, useState } from "react";
import PostersContainer from "../components/PostersContainer";
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

  const getSearchMovies = useCallback(async () => {
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
      overview =
        overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;

      const newMovie = {
        title,
        rating,
        overview,
        year: year.slice(0, 4),
        image: "https://image.tmdb.org/t/p/w500" + image,
        id,
      };
      return newMovie;
    });
    setSearchMovies(movies);
  }, [api, finalQuery]);

  useEffect(() => {
    getSearchMovies();
  }, [getSearchMovies]);

  return (
    <div className="my-flex-container">
      <GenresBar />
      <div className="my-flex-item-posters">
        <div className="d-flex justify-content-center mb-3">
          <h1>Searching "{finalQuery}"</h1>
        </div>
        <PostersContainer movies={searchMovies} />
      </div>
    </div>
  );
};

export default SearchResultsPage;
