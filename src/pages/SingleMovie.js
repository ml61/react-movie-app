import React from "react";
import { useParams } from "react-router-dom";
import GenresBar from "../components/GenresBar";
import MainSingleMovieDescription from "../components/MainSingleMovieDescription";

const SingleMovie = () => {
  const { id } = useParams();

  return (
    <div className="flex-container-movie">
      <GenresBar />
      <MainSingleMovieDescription id={id} />
    </div>
  );
};

export default SingleMovie;
