import React from "react";
import InfoTabel from "./InfoTabel";

const Description = ({ title, overview, rating, ...movieDetails }) => {
  return (
    <>
      <h2 className="single-movie-header">{title}</h2>
      <InfoTabel {...movieDetails} rating={rating} />
      <p className="description">{overview}</p>
    </>
  );
};

export default Description;
