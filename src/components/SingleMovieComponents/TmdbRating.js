import React from "react";
import SingleStar from "./SingleStar";
import BackButton from "../BackButton";

const TmdbRating = ({ rating }) => {
  return (
    <div class="rating-section-container ms-2">
      <div class="rating-section-item mb-4">
        <SingleStar />
        <span>{rating}</span>
      </div>
      <button type="submit" class="btn btn-dark p-3">
        Favourite
      </button>
      <BackButton />
    </div>
  );
};

export default TmdbRating;
