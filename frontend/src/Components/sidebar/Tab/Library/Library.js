import React from "react";
import "./library.css";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Library(){
    return(
        <div className="library">
            <LibraryMusicIcon className="library_icon"> </LibraryMusicIcon>
            <text className="library_title"> Library </text>
        </div>
    );
};

export default Library;
