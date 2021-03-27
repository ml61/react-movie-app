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
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={trailer}
      ></iframe>
    </div>
  );
};

export default IframeAndPoster;
