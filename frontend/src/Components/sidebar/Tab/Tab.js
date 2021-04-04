import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tab.css";
import HomePage from "./HomePage/HomePage";
import Library from "./Library/Library";
import SearchBox from "./SearchBox/SearchBox";

function Tab(props) {
  const [isInHomePage, setInHomePage] = useState(true);
  const [isInSearchBox, setInSearchBox] = useState(false);
  const [isInLibrary, setInLibrary] = useState(false);

  const handleHomePageClick = () => {
    if (!isInHomePage) {
      setInHomePage(true);
      setInLibrary(false);
      setInSearchBox(false);
    }
  };

  const handleSearchBoxClick = () => {
    if (!isInSearchBox) {
      setInHomePage(false);
      setInLibrary(false);
      setInSearchBox(true);
    }
  };

  const handleLibraryClick = () => {
    if (!isInSearchBox) {
      setInHomePage(false);
      setInLibrary(true);
      setInSearchBox(false);
    }
  };

  return (
    <div className="tab">
      <Link to="/">
        <div className="home-page">
          {isInHomePage ? (
            <HomePage style="background-color: #030303;" />
          ) : (
            <HomePage style="background-color: rgb(68, 64, 64);" />
          )}
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
