import React from "react";

const Favourite = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [currentGenre, setCurrentGenre] = useState("");
  const [totalPages, setTotalPages] = useState(null);
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

export default Favourite;
