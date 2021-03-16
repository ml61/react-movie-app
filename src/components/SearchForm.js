import React from "react";

const SearchForm = () => {
  return (
    <form>
      <div className="ui icon input input-dark">
        <input type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
    </form>
  );
};

export default SearchForm;
