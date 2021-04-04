import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SearchTable from "./SearchTable.js";

function SearchPage({ addSong2Queue }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <SearchIcon className="search-icon-main" />
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <SearchTable addSong2Queue={addSong2Queue} />
    </div>
  );
}

export default SearchPage;
