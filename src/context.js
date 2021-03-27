import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [finalQuery, setFinalQuery] = useState("");

  const handleClick = (movieClicked) => {
    if (
      favouriteMovies
        .map((favouriteMovie) => favouriteMovie.id)
        .includes(movieClicked.id)
    ) {
      const newfavouriteMovies = favouriteMovies.filter(
        (favouriteMovie) => favouriteMovie.id !== movieClicked.id
      );
      setFavouriteMovies(newfavouriteMovies);
    }
    if (
      !favouriteMovies
        .map((favouriteMovie) => favouriteMovie.id)
        .includes(movieClicked.id)
    ) {
      setFavouriteMovies([...favouriteMovies, movieClicked]);
    }
  };

  return (
    <AppContext.Provider
      value={{ favouriteMovies, handleClick, finalQuery, setFinalQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
