import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const { finalQuery, setFinalQuery } = useGlobalContext();

  const handleSearchSubmit = (e, term) => {
    setSearchQuery("");
    setFinalQuery(term);
    e.preventDefault();
    history.push({
      pathname: `/search`,
      search: "?query=" + term,
    });
  };

  return (
    <form onSubmit={(e) => handleSearchSubmit(e, searchQuery)}>
      <div className="ui icon input input-dark">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="search icon"></i>
      </div>
    </form>
  );
};

export default SearchForm;
