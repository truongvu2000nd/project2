import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SearchTable from "./SearchTable.js";
import axios from 'axios';

function SearchPage({ addSong2Queue }) {
//  const [searchTerm, setSearchTerm] = useState("");
  const [publicSongs, setPublicSongs] = useState([]);
  

  const handleChange = (event) => {
    if (event.target.value =='') {setPublicSongs([])}
    else {
      axios
      .get("api/search/", {params: {search: event.target.value}} )
      .then((res) => {
        setPublicSongs(res.data);
        //console.log(publicSongs)
        //console.log(res);
      }) 
      .catch((err) => console.log(err));
      }
  };
    

  return (
    <div className="search-page">
      <div className="search-bar">
        <SearchIcon className="search-icon-main" />
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          // value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <SearchTable songs={publicSongs} addSong2Queue={addSong2Queue} />
    </div>
  );
}

export default SearchPage;
