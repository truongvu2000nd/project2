import React, { useState } from "react";
import AddSongToPlaylistModal from "../playlistPage/AddSongToPlaylistModal.js";

export default function SongMenu({
  xPos,
  yPos,
  showMenu,
  song,
  addSong2Queue,
}) {
  const [openModal, setOpenModal] = useState(false);
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
        <div>Add to favorite</div>
      </li>
      <li>
        <div
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          Add to playlist
        </div>
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
      <AddSongToPlaylistModal
        open={openModal}
        setOpen={setOpenModal}
        song={song}
      />
    </div>
  );
}
