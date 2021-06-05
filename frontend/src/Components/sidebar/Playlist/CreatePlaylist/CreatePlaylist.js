import React, { useState } from "react";
import "./createPlaylist.css";
import { makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import CreatePlaylistModal from "./CreatePlaylistModal.js";

import {Button} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: '#484848',
    color: 'white',
    textTransform: 'capitalize',
  },
  select:{
    background: '#004c8c',
    color: 'white',
    textTransform: 'capitalize',
  },
  icon: {
    color: 'white',
  }
});

function CreatePlaylist({ createPlaylist }) {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        classes={openModal?{root: classes.select,}:{root: classes.root,}}
        startIcon={openModal ? <AddBoxIcon /> : <AddBoxOutlinedIcon/>}
      >
        Create new playlist 
      </Button>
      <CreatePlaylistModal
        open={openModal}
        setOpen={setOpenModal}
        createPlaylist={createPlaylist}
      />
    </div>
  );
}

export default CreatePlaylist;
