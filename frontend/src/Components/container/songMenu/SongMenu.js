import React from "react";

export default function SongMenu({ xPos, yPos, showMenu }) {
  const menu = (
    <ul className="menu">
      <li>Add to queue</li>
      <li>Add to favorite</li>
      <li>Add to playlist</li>
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
