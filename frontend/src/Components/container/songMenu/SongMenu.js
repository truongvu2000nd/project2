import React from "react";

export default function SongMenu({
  xPos,
  yPos,
  showMenu,
  song,
  addSong2Queue,
}) {
  const menu = (
    <ul className="song-menu">
      <li>
        <div
          onClick={() => {
            addSong2Queue(song);
          }}
        >
          Add to queue
        </div>
      </li>
      <li>
        <div onClick="#">Add to favorite</div>
      </li>
      <li>
        <div onClick="#">Add to playlist</div>
      </li>
    </ul>
  );

  return (
    <div>
      {showMenu ? (
        <div
          className="song-context-menu"
          style={{
            top: yPos,
            left: xPos,
          }}
        >
          {menu}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
