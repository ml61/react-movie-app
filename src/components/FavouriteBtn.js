import React, { useState } from "react";

import { useGlobalContext } from "../context";

const FavouriteBtn = ({
  currentMovieId,
  title,
  overview,
  image,
  rating,
  year,
}) => {
  const { favouriteMoviesIDs, handleClick } = useGlobalContext();

  return (
    <button
      type="button"
      class="btn btn-dark p-3"
      onClick={(idClicked) => handleClick(currentMovieId)}
    >
      {favouriteMoviesIDs.includes(currentMovieId) ? "Delete" : "Favourite"}
    </button>
  );
};

export default FavouriteBtn;
