import React, { useState, useEffect } from "react";
import SinglePoster from "./SinglePoster";
import Loading from "../components/Loading";
import axios from "axios";
import { useGlobalContext } from "../context";
import { api_key, URL } from "../DataAPI";
import Error from "./Error";

const SliderHome = () => {
  const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const [error, setError] = useState("");

  const api = axios.create({ baseURL: URL });

  const getPopular = async () => {
    setLoading(true);
    try {
      const response = await api.get("/movie/popular", { params: { api_key } });
      let data = response.data;
      let { results: movies } = data;
      const newPopular = movies.map((item) => {
        let {
          title,
          vote_average: rating,
          overview,
          release_date: year,
          poster_path: image,
        } = item;
        overview =
          overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;
        const newItem = {
          title,
          rating,
          overview,
          year: year.slice(0, 4),
          image: "https://image.tmdb.org/t/p/w500" + image,
        };
        return newItem;
      });
      setPopular(newPopular);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  const nextPage = () => {
    if (numberPage < 4) {
      setNumberPage(numberPage + 1);
    }
    if (numberPage >= 4) {
      setNumberPage(1);
    }
  };
  const prevPage = () => {
    if (numberPage > 1) {
      setNumberPage(numberPage - 1);
    }
    if (numberPage <= 1) {
      setNumberPage(4);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error err={error} />;

  return (
    <div className="popular-flex-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-arrow-left-circle slider-btn"
        viewBox="0 0 16 16"
        onClick={prevPage}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg>
      {popular.slice((0 + numberPage - 1) * 5, 5 * numberPage).map((item) => {
        return <SinglePoster {...item} />;
      })}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-arrow-right-circle slider-btn"
        viewBox="0 0 16 16"
        onClick={nextPage}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        />
      </svg>
    </div>
  );
};

export default SliderHome;
