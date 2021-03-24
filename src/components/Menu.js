import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="nav-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo-box">
          <h2 className="logo">maxon movies</h2>
        </div>
      </Link>
      <nav className="menu-box">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="menu-item">home</div>
        </Link>
        <Link
          to="/all-genres/16_Animation?page=1"
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item">all genres</div>
        </Link>
        <Link to="/favourite" style={{ textDecoration: "none" }}>
          <div className="menu-item">favourite</div>
        </Link>
        <Link to="/random-movie" style={{ textDecoration: "none" }}>
          <div className="menu-item">random movie</div>
        </Link>
        <SearchForm />
      </nav>
    </header>
  );
};

export default Menu;
