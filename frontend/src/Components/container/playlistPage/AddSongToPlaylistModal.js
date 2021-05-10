import { React, useState } from "react";
import "./playlistPage.css";
// import axios from "axios";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

function AddSongToPlaylistModal({ open, setOpen, song }) {
  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("api/playlists/", {
  //       name: values,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }
  const listAvailablePlaylist = [
    {
      name: "Playlist #1",
    },
    {
      name: "Playlist #2",
    },
    {
      name: "Playlist #1",
    },
    {
      name: "Playlist #2",
    },
    {
      name: "Playlist #1",
    },
    {
      name: "Playlist #2",
    },
  ];

  const addSongToPlaylistModal = () => {
    const list = listAvailablePlaylist.map((playlist) => (
      <li>
        <h2>{playlist.name}</h2>
        <Button variant="contained" color="secondary">
          Add
        </Button>
      </li>
    ));
    return <ul className="listAvailablePlaylist">{list}</ul>;
  };

  return (
    <div>
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
        <Fade in={open}>{addSongToPlaylistModal()}</Fade>
      </Modal>
    </div>
  );
}

export default AddSongToPlaylistModal;
