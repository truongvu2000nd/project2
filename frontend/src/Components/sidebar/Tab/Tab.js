import React from "react";
import { Link } from "react-router-dom";
import "./tab.css";
import HomePage from "./HomePage/HomePage";
import Library from "./Library/Library";
import SearchBox from "./SearchBox/SearchBox";

function Tab(props) {

  return (
    <div className="tab">
      <Link to="/">
        <div className="home-page">
            <HomePage/>
        </div>
      </Link>
      <Link to="/search">
        <SearchBox className="search-box"> </SearchBox>
      </Link>
      <Link to="/library">
        <Library className="library"> </Library>
      </Link>
    </div>
  );
}

export default Tab;
