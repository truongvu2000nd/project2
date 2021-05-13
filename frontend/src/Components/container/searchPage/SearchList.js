import React, { useState, useEffect, useCallback } from "react";
import SongMenu from "../songMenu/SongMenu.js";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


export default function SearchList({ songs, addSong2Queue }) {
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
    <li
      className="search-song"
      onClick={() => {
        addSong2Queue(song);
      }}
      onContextMenu={(e) => {
        handleContextMenu(e);
        setCurrSong(song);
      }}
    >
      <div>
        <img className="thumbnail" src={song.image} alt="cover_img"></img>
        <h4>{song.title}</h4>
      </div>
      <h4>{song.artist}</h4>
      {/* <FavoriteBorderIcon color="primary"/> */}
    </li>
  ));

  return (
    <div className="search-list">
      <h2>Songs</h2>
      <ul>{songList}</ul>
      <SongMenu
        xPos={xPos}
        yPos={yPos}
        showMenu={showMenu}
        song={currSong}
        addSong2Queue={addSong2Queue}
      />
    </div>
  );
}
