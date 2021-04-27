import React, { useState, useEffect } from "react";
import AddPlaylist from "./AddPlaylist/AddPlaylist";
import "./playlist.css";
import axios from "axios";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);

  const renderPlaylists = () => {
    const listPlaylist = playlists.map((playlist) => (
      <li>
        <div className="playlist-name">
          <text>{playlist.name}</text>
        </div>
      </li>
    ));
    return <ul className="list-playlist">{listPlaylist}</ul>;
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get("api/playlists/");
      setPlaylists(res.data);
    }
    getData();
  }, []);

  return (
    <div className="playlist">
      <text className="playlist-title"> Playlist </text>
      <div>{renderPlaylists()}</div>
      <AddPlaylist />
    </div>
  );
}

export default Playlist;
