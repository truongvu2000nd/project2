import { React, useState, useEffect } from "react";
import "./playlistPage.css";
import axios from "axios";
import Cookies from "js-cookie";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

function AddSongToPlaylistModal({ open, setOpen, song }) {
  const [availablePlaylists, setAvailablePlaylists] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (playlist) => {
    const csrftoken = Cookies.get("csrftoken");
    axios
      .post(
        "api/playlist-song/",
        {
          playlist: playlist.id,
          song: song.id,
        },
        { headers: { "X-CSRFToken": csrftoken } }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    renderListPlaylist();
  };

  const renderListPlaylist = () => {
    axios
      .get(`api/songs/${song.id}/get_not_added_playlist`)
      .then((res) => {
        console.log(res);
        setAvailablePlaylists(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (song !== null) {
      renderListPlaylist();
    }
  }, [song]);

  const addSongToPlaylistModal = () => {
    let list;
    if (availablePlaylists.length === 0) {
      list = <h2>No available playlists</h2>;
    } else {
      list = availablePlaylists.map((playlist) => (
        <li>
          <h2>{playlist.name}</h2>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              handleSubmit(playlist);
            }}
          >
            Add
          </Button>
        </li>
      ));
    }

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
