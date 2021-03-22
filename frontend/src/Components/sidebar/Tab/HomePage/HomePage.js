import React from "react";
import "./homePage.css"
import HomeIcon from '@material-ui/icons/Home';

function HomePage(){
    return(
        <div className="home_page">
            <HomeIcon className="home_icon"> </HomeIcon>
            <text className="home_title"> Home </text>
        </div>
    );
};

export default HomePage;
