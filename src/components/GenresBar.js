import React, { useEffect, useState } from "react";
import SingleGenre from "./SingleGenre";
import axios from "axios";

import { api_key, URL } from "../DataAPI";
import Error from "./Error";

const GenresBar = ({ currentGenre, handleGenre }) => {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  const api = axios.create({ baseURL: URL });

  const getGenres = async () => {
    setLoading(true);
    try {
      const response = await api.get("/genre/movie/list", {
        params: { api_key },
      });
      let genreNames = response.data.genres.map((item) => item);
      const randomGenre = { id: 1, name: "Random Genre" };
      genreNames.unshift(randomGenre);
      setGenres(genreNames);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  //   getGenres();
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div class="my-flex-item-genres">
      <div class="container">
        <ul>
          {genres.map((item) => {
            return (
              <SingleGenre
                {...item}
                currentGenre={currentGenre}
                handleGenre={handleGenre}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GenresBar;
