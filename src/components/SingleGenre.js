import React from "react";

const SingleGenre = ({ name, id, currentGenre, handleGenre }) => {
  return (
    <li>
      <div class="row">
        <div
          class={`col genre-name-text border-hover p-0.5 px-4 bg-dark ${
            name === currentGenre ? "genre-name-text-active" : ""
          }`}
          id={id}
          onClick={(e) => handleGenre(e.target.id, e.target.outerText)}
        >
          {name}
        </div>
      </div>
    </li>
  );
};

export default SingleGenre;
