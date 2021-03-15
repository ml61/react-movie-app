import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header class="nav-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div class="logo-box">
          <h2 class="logo">maxon movies</h2>
        </div>
      </Link>
      <nav class="menu-box">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class="menu-item">home</div>
        </Link>
        <Link to="/all-genres" style={{ textDecoration: "none" }}>
          <div class="menu-item">all genres</div>
        </Link>
        <Link to="/favourite" style={{ textDecoration: "none" }}>
          <div class="menu-item">favourite</div>
        </Link>
        <Link to="/random-movie" style={{ textDecoration: "none" }}>
          <div class="menu-item">random movie</div>
        </Link>
        <SearchForm />
      </nav>
    </header>
  );
};

export default Menu;
