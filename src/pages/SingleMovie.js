import React from "react";
import { useParams, Link } from "react-router-dom";
import GenresBar from "../components/GenresBar";
import SingleMovieDescription from "../components/SingleMovieDescription";

const SingleMovie = () => {
  const { id } = useParams();

  return (
    <div class="flex-container-movie">
      <GenresBar />
      <SingleMovieDescription />
    </div>
  );
};

export default SingleMovie;
