import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GenresBar from "../components/GenresBar";
import MainSingleMovieDescription from "../components/SingleMovieComponents/MainSingleMovieDescription";
import Loading from "../components/Loading";
import Error from "../components/Error";

import axios from "axios";
import { api_key, URL } from "../DataAPI";

const SingleMovie = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [currentGenre, setCurrentGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const api = axios.create({ baseURL: URL });

  const getDetails = async () => {
    setLoading(true);
    try {
      const responseDetails = await api.get(`/movie/${id}`, {
        params: { api_key },
      });
      const responseVideos = await api.get(`/movie/${id}/videos`, {
        params: { api_key },
      });
      const responseCredits = await api.get(`/movie/${id}/credits`, {
        params: { api_key },
      });

      const { data: dataDetails } = responseDetails;
      const { data: dataVideos } = responseVideos;
      const { data: dataCredits } = responseCredits;

      let {
        genres,
        title,
        overview,
        poster_path: image,
        production_countries: countries,
        release_date: year,
        runtime,
        vote_average: rating,
      } = dataDetails;
      year = year.slice(0, 4);
      countries = countries
        .splice(0, 3)
        .map((item) => item.name)
        .join(", ");
      genres = genres
        .splice(0, 3)
        .map((item) => item.name)
        .join(", ");

      const trailer = dataVideos.results[0].key;
      const casting = dataCredits.cast
        .splice(0, 4)
        .map((item) => item.name)
        .join(", ");
      const director = dataCredits.crew.find((item) => item.job === "Director")
        .name;

      const movieDetails = {
        genres,
        title,
        overview,
        image,
        countries,
        year,
        runtime,
        rating,
        trailer,
        casting,
        director,
      };

      setDetails(movieDetails);
      setCurrentGenre(movieDetails.genres.split(", ")[0]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div class="flex-container-movie">
      <GenresBar currentGenre={currentGenre} />
      <MainSingleMovieDescription {...details} />
    </div>
  );
};

export default SingleMovie;
