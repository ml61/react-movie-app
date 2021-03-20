import React, { useState } from "react";
import SingleFormOption from "./SingleFormOption";

const FormRandomMovie = ({ handleYear, handleRating }) => {
  const [yearOption, setYearOption] = useState("Year not earlier than");
  const [ratingOption, setRatingOption] = useState("Rating not less than");
  let movieYears = [];
  for (let i = new Date().getFullYear(); i > 1979; i--) {
    movieYears.push(i);
  }
  let ratingValues = [];
  for (let i = 9; i > 4; i -= 0.5) {
    ratingValues.push(i);
  }
  movieYears.unshift("Year not earlier than");
  ratingValues.unshift("Rating not less than");
  return (
    <form class="form-inline d-flex justify-content-center align-items-center">
      <div class="select-item mx-2">
        <select
          class="form-select text-light bg-dark border-0"
          aria-label="Default select example"
          value={yearOption}
          onChange={(e) => {
            setYearOption(e.target.value);
            handleYear(e.target.value);
          }}
        >
          {movieYears.map((year) => {
            return <SingleFormOption option={year} />;
          })}
        </select>
      </div>
      <div class="select-item mx-2">
        <select
          class="form-select text-light bg-dark border-0"
          aria-label="Default select example"
          value={ratingOption}
          onChange={(e) => {
            setRatingOption(e.target.value);
            handleRating(e.target.value);
          }}
        >
          {ratingValues.map((rating) => {
            return <SingleFormOption option={rating} />;
          })}
        </select>
      </div>
      <button type="submit" class="btn btn-dark mx-2 p-2">
        Generate random movie
      </button>
    </form>
  );
};

export default FormRandomMovie;
