import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BasicPagination from "../components/BasicPagination";
import PostersContainer from "../components/PostersContainer";
import GenresBar from "../components/GenresBar";

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
  const [currentPage, setCurrentPage] = useState(null);
  const [currentGenre, setCurrentGenre] = useState("");
  const [totalPages, setTotalPages] = useState(null);

  const handleChangePage = (e, page) => {
    setCurrentPage(page);
    history.push({
      pathname: `/all-genres/${genreId}_${currentGenre}`,
      search: "?page=" + page,
    });
  };

  const api = axios.create({ baseURL: URL });
  const getNumberOfPages = async (page = 1) => {
    const response = await api.get("/discover/movie", {
      params: {
        api_key,
        with_genres: id,
        page: page,
        "vote_count.gte": 500,
      },
    });
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    getNumberOfPages(1);
    setGenreId(id);
    setCurrentGenre(genreName);
    setCurrentPage(parseInt(params.get("page")));
  }, [id_genreName]);

  return (
    <div class="my-flex-container">
      <GenresBar currentGenre={currentGenre} />
      <div class="my-flex-item-posters">
        <div class="d-flex justify-content-center mb-3">
          <BasicPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </div>
        <PostersContainer genreId={genreId} currentPage={currentPage} />
        <div class="d-flex justify-content-center mb-5">
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
