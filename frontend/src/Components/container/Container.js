import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Line from "./Line";
import "./container.css";
import SearchPage from "./searchPage/SearchPage.js";

import axios from "axios";
//import icon
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Container = ({ addSong2Queue }) => {
  const [publicSongs, setPublicSongs] = useState([]);

  useEffect(() => {
    axios
      .get("api/songs/")
      .then((res) => {
        setPublicSongs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="topNav">
        <ChevronLeftIcon className="chevron" />
        <ChevronRightIcon className="chevron" />
        <Profile />
      </div>
      <Switch>
        <Route exact path="/">
          <Line songs={publicSongs} addSong2Queue={addSong2Queue} />
        </Route>
        <Route path="/search">
          <SearchPage addSong2Queue={addSong2Queue} />
        </Route>
      </Switch>
    </div>
  );
};

export default Container;
