import React, {useState} from "react";
import "./tab.css"
import HomePage from "./HomePage/HomePage";
import Library from "./Library/Library";
import SearchBox from "./SearchBox/SearchBox"

function Tab(props){
    const [isInHomePage, setInHomePage]=useState(true);
    const [isInSearchBox, setInSearchBox]=useState(false);
    const [isInLibrary, setInLibrary]=useState(false);

    const handleHomePageClick = () => {
        if (!isInHomePage){
            setInHomePage(true);
            setInLibrary(false);
            setInSearchBox(false);
        }        
    };

    const handleSearchBoxClick = () => {
        if (!isInSearchBox){
            setInHomePage(false);
            setInLibrary(false);
            setInSearchBox(true);
        }
    };
 
    const handleLibraryClick = () => {
        if (!isInSearchBox){
            setInHomePage(false);
            setInLibrary(true);
            setInSearchBox(false);
        }
    };


    return(
        <div className="tab">
            <div className="home_page" onClick={handleHomePageClick}>
                {isInHomePage? <HomePage style="background-color: #030303;" /> : <HomePage style="background-color: rgb(68, 64, 64);"/>}
            </div>
            <SearchBox className="search_box"> </SearchBox>
            <Library className="library"> </Library>
        </div>
    );
};

export default Tab;
