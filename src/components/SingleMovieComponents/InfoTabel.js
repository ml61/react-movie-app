import React from "react";

const InfoTabel = ({
  image,
  countries,
  year,
  runtime,
  rating,
  casting,
  director,
  genres,
}) => {
  return (
    <div className="info-table-movie mb-2">
      <div className="container">
        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            Runtime
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">
            {runtime} min
          </div>
        </div>
        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            Released
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">{year}</div>
        </div>
        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            Genres
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">{genres}</div>
        </div>
        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            Director
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">{director}</div>
        </div>
        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            Casting
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">{casting}</div>
        </div>
        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            Country
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">
            {countries}
          </div>
        </div>

        <div className="row">
          <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
            TMDB rate
          </div>
          <div className="col genre-name-text p-1 px-2 bg-dark">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoTabel;
