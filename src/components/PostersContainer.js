import React from "react";
import SinglePoster from "./SinglePoster";

const PostersContainer = ({ movies }) => {
  return (
    <div className="container pb-4">
      <div className="row g-0 g-sm-1 g-md-2 g-lg-3">
        {movies.map((movie) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 movie-hovered">
              <SinglePoster {...movie} key={movie.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostersContainer;
