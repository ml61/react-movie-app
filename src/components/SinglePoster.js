import React from "react";
import { Link } from "react-router-dom";

const SinglePoster = ({ title, rating, overview, year, image, id }) => {
  const showId = (id) => {
    console.log(id);
  };

  return (
    <Link to={`/movie/${id}`}>
      <div className="my-poster-wrap">
        <img className="card my-poster" src={`${image}`} alt={`${title}`} />
        <div className="my-poster-description">
          <h5>
            {title} ({year})
          </h5>
          <p>{overview}</p>
          <p className="d-flex align-items-bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="yellow"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
            <span className="mx-2">{rating}</span>
          </p>

          <button type="button" className="btn btn-dark btn-sm">
            Add to favourite
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SinglePoster;
