import React from "react";
import AddPlaylist from "./AddPlaylist/AddPlaylist";
import "./playlist.css";

function Playlist(){
    return(
        <div className="playlist">
            <text className="playlist_title"> Playlist </text>
            <AddPlaylist className="add_playlist"></AddPlaylist>
        </div>
    );
};

export default Playlist;