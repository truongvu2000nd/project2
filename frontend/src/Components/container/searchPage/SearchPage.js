import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SearchTable from "./SearchTable.js";
import axios from 'axios';

function SearchPage({ addSong2Queue }) {
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (searchTerm.length < 3) {
      setSongs([]);
    }
    else {
      axios
      .get("api/search/", {params: {search: searchTerm}} )
=======
//  const [searchTerm, setSearchTerm] = useState("");
  const [publicSongs, setPublicSongs] = useState([]);
  

  const handleChange = (event) => {
    if (event.target.value =='') {setPublicSongs([])}
    else {
      axios
      .get("api/search/", {params: {search: event.target.value}} )
>>>>>>> 31ef4ea1bab571b69fa56fde573ffee4fa765b65
      .then((res) => {
        setSongs(res.data);
      }) 
      .catch((err) => console.log(err));
<<<<<<< HEAD
    }
  }, [searchTerm])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
=======
      }
>>>>>>> 31ef4ea1bab571b69fa56fde573ffee4fa765b65
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
      <SearchTable songs={songs} addSong2Queue={addSong2Queue} />
    </div>
  );
}

export default SearchPage;
