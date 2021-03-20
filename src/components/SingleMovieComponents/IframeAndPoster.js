import React from "react";

const IframeAndPoster = ({ image, trailer }) => {
  return (
    <div className="poster-section-container">
      <img
        className="single-movie-poster"
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt=""
      />
      <iframe
        src={`https://www.youtube.com/embed/${trailer}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default IframeAndPoster;
