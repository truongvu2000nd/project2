import React from "react";
import "./sidebar.css";
import logo from "./Logo.png"
import Tab from "./Tab/Tab"
import Playlist from "./Playlist/Playlist"

function Sidebar(){
    return(
        
        <div className="side_bar">
            <img id="logo" src={logo} alt="logo"></img>
            <Tab className="tab"> </Tab>
            <Playlist className="playlist"></Playlist>
        </div>
    );
};

export default Sidebar;
