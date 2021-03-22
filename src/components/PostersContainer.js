import React, { useState, useEffect } from "react";
import SinglePoster from "./SinglePoster";
import Error from "./Error";
import Loading from "../components/Loading";

import axios from "axios";
import { api_key, URL } from "../DataAPI";

const PostersContainer = ({ genreId, currentPage }) => {
  const [loading, setLoading] = useState(false);
  const [moviesOfGenre, setMoviesOfGenre] = useState([]);
  const [error, setError] = useState("");

  const api = axios.create({ baseURL: URL });

  const getMoviesOfGenre = async (page = 1) => {
    setLoading(true);
    try {
      const response = await api.get("/discover/movie", {
        params: {
          api_key,
          with_genres: genreId,
          page: page,
          "vote_count.gte": 500,
        },
      });
      let { data } = response;
      let { results: movies } = data;
      const newMoviesOfGenre = movies.map((item) => {
        let {
          title,
          vote_average: rating,
          overview,
          release_date: year,
          poster_path: image,
          id,
        } = item;
        overview =
          overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;
        const newItem = {
          title,
          rating,
          overview,
          year: year.slice(0, 4),
          image: "https://image.tmdb.org/t/p/w500" + image,
          id,
        };
        return newItem;
      });
      setMoviesOfGenre(newMoviesOfGenre);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesOfGenre(currentPage);
  }, [genreId, currentPage]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div class="container pb-4">
      <div class="row g-0 g-sm-1 g-md-2 g-lg-3">
        {moviesOfGenre.map((movie) => {
          return (
            <div class="col-12 col-sm-6 col-md-4 col-xl-3 movie-hovered">
              <SinglePoster {...movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostersContainer;
