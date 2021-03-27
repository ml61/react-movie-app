import React, { useState } from "react";
// import BasicPagination from "../components/BasicPagination";
// import PostersContainer from "../components/PostersContainer";
import GenresBar from "../components/GenresBar";
import PostersContainer from "../components/PostersContainer";
import { useGlobalContext } from "../context";

const Favourite = () => {
  const { favouriteMovies } = useGlobalContext();
  const newFavouriteMovies = favouriteMovies.map((item) => {
    let { title, rating, overview, year, image, id } = item;
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

  return (
    <div className="my-flex-container">
      <GenresBar />
      <div className="my-flex-item-posters">
        <div className="d-flex justify-content-center mb-3">
          <h1>Favourite Movies</h1>
        </div>
        <PostersContainer movies={newFavouriteMovies} />
      </div>
    </div>
  );
};

export default Favourite;
