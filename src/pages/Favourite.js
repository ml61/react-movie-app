import React, { useState } from "react";
// import BasicPagination from "../components/BasicPagination";
// import PostersContainer from "../components/PostersContainer";
import GenresBar from "../components/GenresBar";
import FavouritePostersContainer from "../components/FavouritePostersContainer";
import { useGlobalContext } from "../context";

const Favourite = () => {
  const { favouriteMovies } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(null);

  const [totalPages, setTotalPages] = useState(null);

  return (
    <div class="my-flex-container">
      <GenresBar />
      <div class="my-flex-item-posters">
        <div class="d-flex justify-content-center mb-3">
          {/* <BasicPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          /> */}
        </div>
        <FavouritePostersContainer movies={favouriteMovies} />
      </div>
    </div>
  );
};

export default Favourite;
