import React from "react";
import "./addPlaylist.css";
import AddBoxIcon from '@material-ui/icons/AddBox';

function AddPlaylist(){
    return(
        <div className="add-playlist">
            <AddBoxIcon className="add-icon"> </AddBoxIcon>
            <text className="add-title"> Create new playlist </text>
        </div>
    );
};

export default AddPlaylist;
