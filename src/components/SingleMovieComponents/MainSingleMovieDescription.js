import React, { useEffect } from "react";

import Error from "../Error";

import Description from "./Description";

import TmdbRating from "./TmdbRating";
import IframeAndPoster from "./IframeAndPoster";
import InfoTabel from "./InfoTabel";

const MainSingleMovieDescription = ({
  trailer,
  image,
  rating,
  ...movieDetails
}) => {
  return (
    <>
      <IframeAndPoster image={image} trailer={trailer} />
      <div class="description-section-container">
        <Description {...movieDetails} rating={rating} />
      </div>
      <TmdbRating rating={rating} />
    </>
  );
};

export default MainSingleMovieDescription;
