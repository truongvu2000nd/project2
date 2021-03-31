import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Line from "./Line";
import "./container.css";
import axios from "axios";
//import icon
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Icon, IconButton } from "@material-ui/core";

const Container = ({props, addSong2Queue}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [publicSongs, setPublicSongs] = useState([]);

  useEffect(() => {
    axios
      .get("api/songs/")
      .then((res) => {
        setIsLoaded(true);
        setPublicSongs(res.data);
        console.log(publicSongs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="topNav">
        <IconButton>
          <ChevronLeftIcon className="chevron" />
        </IconButton>
        <IconButton>
          <ChevronRightIcon className="chevron" />
        </IconButton>
        <Profile />
      </div>
      <Line songs={publicSongs} addSong2Queue={addSong2Queue} />
    </div>
  );
};

export default Container;
