import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import Loading from "./components/Loading";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState();

  //   const [genreName, setGenreName] = useState("");
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [randomGenre, setRandomGenre] = useState("");
  //   const [randomYear, setRandomYear] = useState();

  //   useEffect(() => {

  //   }, []);

  return <AppContext.Provider value={popular}>{children}</AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
