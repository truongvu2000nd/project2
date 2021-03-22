import React, {useState} from "react";
import "./searchBox.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBox(){
    return(
        <div className="search_box">
            <SearchIcon className="search_icon"> </SearchIcon>
            <text className="search_title"> Search </text>
        </div>
    );
};

export default SearchBox;
