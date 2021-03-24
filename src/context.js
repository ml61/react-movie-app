import React, { useState, useContext, useEffect } from "react";
// import { useCallback } from "react";
// import Loading from "./components/Loading";
// import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [favouriteMoviesIDs, setFavouriteMoviesIDs] = useState([]);

  const handleClick = (idClicked) => {
    if (favouriteMoviesIDs.includes(idClicked)) {
      const newFavouriteMoviesIDs = favouriteMoviesIDs.filter(
        (favouriteMovieId) => favouriteMovieId !== idClicked
      );
      setFavouriteMoviesIDs(newFavouriteMoviesIDs);
    }
    if (!favouriteMoviesIDs.includes(idClicked)) {
      setFavouriteMoviesIDs([...favouriteMoviesIDs, idClicked]);
    }
  };

  return (
    <AppContext.Provider value={{ favouriteMoviesIDs, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
