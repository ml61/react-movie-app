import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BasicPagination from "../components/BasicPagination";
import PostersContainer from "../components/PostersContainer";
import GenresBar from "../components/GenresBar";
import Error from "../components/Error";
import Loading from "../components/Loading";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { api_key, URL } from "../DataAPI";

const AllGenres = () => {
  const { id_genreName } = useParams();
  const id = id_genreName.split("_")[0];
  const genreName = id_genreName.split("_")[1];

  const history = useHistory();
  let search = window.location.search;
  let params = new URLSearchParams(search);

  const [genreId, setGenreId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [moviesOfGenre, setMoviesOfGenre] = useState([]);
  const [error, setError] = useState("");

  const handleChangePage = (e, page) => {
    setCurrentPage(page);
    history.push({
      pathname: `/all-genres/${genreId}_${currentGenre}`,
      search: "?page=" + page,
    });
  };

  const api = axios.create({ baseURL: URL });

  const getMoviesOfgenre = async (page = 1) => {
    setLoading(true);
    try {
      const response = await api.get("/discover/movie", {
        params: {
          api_key,
          with_genres: id,
          page: page,
          "vote_count.gte": 500,
        },
      });
      const totalPages = response.data.total_pages;
      let { data } = response;
      let { results: movies } = data;
      const newMoviesOfGenre = movies.map((item) => {
        let {
          title,
          vote_average: rating,
          overview,
          release_date: year,
          poster_path: image,
          id,
        } = item;
        overview =
          overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;
        const newItem = {
          title,
          rating,
          overview,
          year: year.slice(0, 4),
          image: "https://image.tmdb.org/t/p/w500" + image,
          id,
        };
        return newItem;
      });
      setTotalPages(totalPages);
      setMoviesOfGenre(newMoviesOfGenre);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesOfgenre(currentPage);
    setGenreId(id);
    setCurrentGenre(genreName);
    setCurrentPage(parseInt(params.get("page")));
  }, [id_genreName, currentPage]);

  if (loading) return <Loading />;
  if (error) return <Error err={error} />;

  return (
    <div className="my-flex-container">
      <GenresBar currentGenre={currentGenre} />
      <div className="my-flex-item-posters">
        <div className="d-flex justify-content-center mb-3">
          <BasicPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </div>
        <PostersContainer movies={moviesOfGenre} />
        <div className="d-flex justify-content-center mb-5">
          <BasicPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AllGenres;
