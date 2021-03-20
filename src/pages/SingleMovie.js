import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GenresBar from "../components/GenresBar";
import MainSingleMovieDescription from "../components/SingleMovieComponents/MainSingleMovieDescription";

const SingleMovie = () => {
  const { id } = useParams();
  const [currentGenre, setCurrentGenre] = useState("");

  const handleCurrentGenre = (genre) => {
    setCurrentGenre(genre);
  };

  return (
    <div class="flex-container-movie">
      <GenresBar currentGenre={currentGenre} />
      <MainSingleMovieDescription
        id={id}
        handleCurrentGenre={handleCurrentGenre}
      />
    </div>
  );
};

export default SingleMovie;
