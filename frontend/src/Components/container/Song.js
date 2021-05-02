import React, { useState, useCallback, useEffect } from "react";
import "./container.css";
import SongMenu from "./songMenu/SongMenu.js";

const Song = ({ song, addSong2Queue }) => {
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

  return (
    <div
      className="song"
      onClick={() => addSong2Queue(song)}
      onContextMenu={handleContextMenu}
    >
      <div>
        <img className="song_img" src={song.image} alt="cover_img"></img>
      </div>
      <div className="song_info">
        <h3 className="song_name">{song.title}</h3>
        <h4 className="song_description"></h4>
      </div>
      <SongMenu xPos={xPos} yPos={yPos} showMenu={showMenu} song={song} addSong2Queue={addSong2Queue} />
    </div>
  );
};

export default Song;
