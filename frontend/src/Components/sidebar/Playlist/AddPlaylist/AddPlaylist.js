import React, { useState } from "react";
import "./addPlaylist.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CreatePlaylistModal from "./CreatePlaylistModal.js";

function AddPlaylist({ createPlaylist }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="add-playlist" onClick={handleOpen}>
        <AddBoxIcon className="add-icon" />
        <text className="add-title"> Create new playlist </text>
      </div>
      <CreatePlaylistModal
        open={openModal}
        setOpen={setOpenModal}
        createPlaylist={createPlaylist}
      />
    </div>
  );
}

export default AddPlaylist;
