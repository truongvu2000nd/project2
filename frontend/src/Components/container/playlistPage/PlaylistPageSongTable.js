import React, { useState, useEffect, useCallback } from "react";
import SongMenu from "../songMenu/SongMenu.js";

export default function PlaylistPageSongTable({ songs, addSong2Queue }) {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.addEventListener("click", handleClick);
    };
  });

  const songList = songs.map((song, index) => (
    <tr
      className="playlist-page-song"
      onClick={() => {
        addSong2Queue(song);
      }}
    >
      <td>{index + 1}</td>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>n/a</td>
    </tr>
  ));

  return (
    <table className="playlist-song-table">
      <tr>
        <th>#</th>
        <th>TITLE</th>
        <th>ARTIST</th>
        <th>DURATION</th>
      </tr>
      {songList}
    </table>
  );
}
