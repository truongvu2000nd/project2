import React from "react";
import "./addPlaylist.css";
import AddBoxIcon from '@material-ui/icons/AddBox';

function AddPlaylist(){
    return(
        <div className="add_playlist">
            <AddBoxIcon className="add_icon"> </AddBoxIcon>
            <text className="add_title"> Create new playlist </text>
        </div>
    );
};

export default AddPlaylist;
