import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SearchList from "./SearchList.js";
import axios from "axios";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function SearchPage({ addSong2Queue }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);
  const [hoverTopResult, setHoverTopResult] = useState(false);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setSongs([]);
    } else {
      axios
        .get("api/search/", { params: { search: searchTerm } })
        .then((res) => {
          setSongs(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [searchTerm]);

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
          // value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="search-results">
        <div className="search-top-result">
          <h2>Top result</h2>
          {songs.length === 0 ? (
            searchTerm.length !== 0 && <h3>No result found for {searchTerm}</h3>
          ) : (
            <div
              className="top-result"
              onMouseEnter={() => {
                setHoverTopResult(true);
              }}
              onMouseLeave={() => {
                setHoverTopResult(false);
              }}
              onClick={() => {
                addSong2Queue(songs[0]);
              }}
            >
              <img
                className="top-result-img"
                src={songs[0].image}
                alt="cover_img"
              ></img>
              <h1>{songs[0].title}</h1>
              <h4>{songs[0].artist}</h4>
              {hoverTopResult && (
                <PlayCircleFilledIcon
                  className="play-icon"
                  color="secondary"
                  style={{ fontSize: 100 }}
                />
              )}
            </div>
          )}
        </div>
        <SearchList songs={songs} addSong2Queue={addSong2Queue} />
      </div>
    </div>
  );
}

export default SearchPage;
