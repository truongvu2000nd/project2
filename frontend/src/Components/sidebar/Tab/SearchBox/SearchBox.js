import React from "react";
import "./searchBox.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBox(){
    return(
        <div className="search-box">
            <SearchIcon className="search-icon"> </SearchIcon>
            <text className="search-title"> Search </text>
        </div>
    );
};

export default SearchBox;
