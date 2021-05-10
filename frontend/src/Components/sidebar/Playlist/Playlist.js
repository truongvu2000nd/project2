import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePlaylist from "./CreatePlaylist/CreatePlaylist.js";
import Cookies from 'js-cookie';
import "./playlist.css";
import axios from "axios";

function Playlist() {
  const [playlists, setPlaylists] = useState([{
    "id": 0,
    "name": "",
  }]);

  const renderPlaylists = () => {
    const listPlaylist = playlists.map((playlist) => (
      <li>
        <div className="playlist-name">
          <Link to={{ pathname: `/playlist/${playlist.id}` }}>
            {playlist.name}
          </Link>
        </div>
      </li>
    ));
    return <ul className="list-playlist">{listPlaylist}</ul>;
  };

  async function refreshList() {
    const res = await axios.get("api/playlists/");
    setPlaylists(res.data);
  }

  useEffect(() => {
    refreshList();
  }, []);

  // const getCookie = (name) => {
  //   let cookieValue = null;
  //   if (document.cookie && document.cookie !== '') {
  //       const cookies = document.cookie.split(';');
  //       for (let i = 0; i < cookies.length; i++) {
  //           const cookie = cookies[i].trim();
  //           // Does this cookie string begin with the name we want?
  //           if (cookie.substring(0, name.length + 1) === (name + '=')) {
  //               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  //               break;
  //           }
  //       }
  //   }
  //   return cookieValue;
  // } 

  const createPlaylist = (e, playlistName) => {
    // e.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    axios
      .post(
        "api/playlists/",
        {
          name: playlistName,
        },
        { headers: { "X-CSRFToken": csrftoken } }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="playlist">
      <text className="playlist-title"> Playlist </text>
      <div>{renderPlaylists()}</div>
      <CreatePlaylist createPlaylist={createPlaylist}/>
    </div>
  );
}

export default Playlist;
