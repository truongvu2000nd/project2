import React, { useState, useEffect, useCallback } from "react";
import SongMenu from "../songMenu/SongMenu.js";

export default function SearchTable({ songs, addSong2Queue }) {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const [currSong, setCurrSong] = useState(null);

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

  const songList = songs.map((song) => (
    <tr
      className="search-song"
      onClick={() => {
        addSong2Queue(song);
      }}
      onContextMenu={(e) => {
        handleContextMenu(e);
        setCurrSong(song);
      }}
    >
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>n/a</td>
    </tr>
  ));

  return (
    <table className="search-table">
      <tr>
        <th>TITLE</th>
        <th>ARTIST</th>
        <th>DURATION</th>
      </tr>
      {songList}
      <SongMenu xPos={xPos} yPos={yPos} showMenu={showMenu} song={currSong} addSong2Queue={addSong2Queue} />
    </table>
  );
}
