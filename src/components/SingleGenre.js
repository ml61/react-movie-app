import React from "react";
import { Link } from "react-router-dom";

const SingleGenre = ({ name: genreName, id, currentGenre }) => {
  return (
    <li>
      <div class="row">
        <Link to={`/all-genres/${id + "_" + genreName}`}>
          <div
            class={`col genre-name-text border-hover p-0.5 px-4 bg-dark ${
              currentGenre === genreName ? "genre-name-text-active" : ""
            } `}
          >
            {genreName}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default SingleGenre;
