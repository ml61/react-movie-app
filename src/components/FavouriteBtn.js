import React, { useState } from "react";

import { useGlobalContext } from "../context";

const FavouriteBtn = ({ movie }) => {
  const { favouriteMovies, handleClick } = useGlobalContext();

  return (
    <button
      type="button"
      class="btn btn-dark p-3"
      onClick={() => handleClick(movie)}
    >
      {favouriteMovies
        .map((favouriteMovie) => favouriteMovie.id)
        .includes(movie.id)
        ? "Delete"
        : "Favourite"}
    </button>
  );
};

export default FavouriteBtn;
