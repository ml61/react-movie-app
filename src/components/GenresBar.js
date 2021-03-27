import React, { useEffect, useState } from "react";
import SingleGenre from "./SingleGenre";
import axios from "axios";

import { api_key, URL } from "../DataAPI";

const GenresBar = ({ currentGenre }) => {
  const [genres, setGenres] = useState([]);

  //   getGenres();
  useEffect(() => {
    const api = axios.create({ baseURL: URL });
    const getGenres = async () => {
      const response = await api.get("/genre/movie/list", {
        params: { api_key },
      });
      let genreNames = response.data.genres.map((item) => item);
      setGenres(genreNames);
    };
    getGenres();
  }, []);

  return (
    <div className="my-flex-item-genres">
      <div className="container">
        <ul>
          {genres.map((item) => {
            return (
              <SingleGenre
                {...item}
                currentGenre={currentGenre}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GenresBar;
