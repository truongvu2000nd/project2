import React, { useState } from "react";
import axios from "axios";
import "./addPlaylist.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

export default function CreatePlaylistModal({ open, setOpen, createPlaylist }) {
  const [playlistName, setPlaylistName] = useState("");

  const handleChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createForm = (
    <form
      className="create-form"
      onSubmit={(e) => {
        createPlaylist(e, playlistName);
      }}
    >
      <h1>Create new playlist</h1>
      <label>
        Playlist name:
        <br />
        <input
          type="text"
          value={playlistName}
          onChange={handleChange}
          placeholder="My playlist #1"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

  return (
    <div>
      <h1>{playlistName}</h1>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{createForm}</Fade>
      </Modal>
    </div>
  );
}
