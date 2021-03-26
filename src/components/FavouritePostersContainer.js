import React from "react";
import SinglePoster from "./SinglePoster";

const FavouritePostersContainer = ({ movies }) => {
  const newMovies = movies.map((item) => {
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
    <div class="container pb-4">
      <div class="row g-0 g-sm-1 g-md-2 g-lg-3">
        {newMovies.map((movie) => {
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

export default FavouritePostersContainer;
