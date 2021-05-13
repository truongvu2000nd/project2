import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import PlaylistPageSongTable from "./PlaylistPageSongTable.js";

export default function PlaylistPage({ addSong2Queue }) {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState({
    id: 0,
    name: "",
  });
  const [relationSongs, setRelationSongs] = useState([]);

  useEffect(() => {
    async function getPlaylist() {
      // Get cac playlist
      const res = await axios.get(`/api/playlists/${id}`);
      setPlaylist(res.data);
    }

    async function getRelationSongs() {
      // Get cac bai hat trong playlist
      const res = await axios.get(`/api/playlists/${id}/get_relation_song`);
      setRelationSongs(res.data);
    }
    getPlaylist();
    getRelationSongs();
  }, [id]);

  return (
    <div>
      <div className="playlist-page-name">{playlist.name}</div>
      <div className="playlist-page-songlist">
        <PlaylistPageSongTable
          songs={relationSongs}
          addSong2Queue={addSong2Queue}
        />
      </div>
    </div>
  );
}
