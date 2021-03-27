import React from "react";
import SingleStar from "./SingleStar";

const TmdbRating = ({ rating }) => {
  return (
    <div className="rating-section-item mb-4">
      <SingleStar />
      <span>{rating}</span>
    </div>
  );
};

export default TmdbRating;
