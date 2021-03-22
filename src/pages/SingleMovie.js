import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GenresBar from "../components/GenresBar";
import MainSingleMovieDescription from "../components/SingleMovieComponents/MainSingleMovieDescription";

const SingleMovie = () => {
  const { id } = useParams();

  return (
    <div class="flex-container-movie">
      <GenresBar />
      <MainSingleMovieDescription id={id} />
    </div>
  );
};

export default SingleMovie;
