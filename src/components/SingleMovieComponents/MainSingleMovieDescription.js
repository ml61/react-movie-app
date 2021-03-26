import React, { useEffect, useState } from "react";

import Description from "./Description";

import TmdbRating from "./TmdbRating";
import IframeAndPoster from "./IframeAndPoster";
import FavouriteBtn from "../FavouriteBtn";
import InfoTabel from "./InfoTabel";
import BackButton from "../BackButton";

import Loading from "../Loading";
import Error from "../Error";

import axios from "axios";
import { api_key, URL } from "../../DataAPI";

const MainSingleMovieDescription = ({ id }) => {
  const [details, setDetails] = useState({});

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
        id,
      };

      setDetails(movieDetails);

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
    <>
      <IframeAndPoster image={details.image} trailer={details.trailer} />
      <div class="description-section-container">
        <Description {...details} rating={details.rating} />
      </div>
      <div class="rating-section-container ms-2">
        <TmdbRating rating={details.rating} />
        <FavouriteBtn movie={details} />
        <BackButton />
      </div>
    </>
  );
};

export default MainSingleMovieDescription;
