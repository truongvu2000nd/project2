import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePlaylist from "./CreatePlaylist/CreatePlaylist.js";
import Cookies from "js-cookie";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import axiosInstance from "../../../axiosApi";

const useStyles = makeStyles({
  root: {
    background: "#000000",
    color: "white",
    textTransform: "capitalize",
    height: "48px",
  },
});

function Playlist({ isLogin, setIsLogin }) {
  const classes = useStyles();
  const [playlists, setPlaylists] = useState([
    {
      id: 0,
      name: "",
    },
  ]);

  const renderPlaylists = () => {
    const listPlaylist = playlists.map((playlist) => (
      <List>
        <ListItem
          className={classes.root}
          component={Link}
          to={`/playlist/${playlist.id}`}
        >
          <ListItemText primary={playlist.name}> </ListItemText>
        </ListItem>
      </List>
    ));
    return (
      <div style={{ maxHeight: 159, overflow: "auto", width: "100%" }}>
        {listPlaylist}{" "}
      </div>
    );
  };

  async function refreshList() {
    const res = await axios.get("api/playlists/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    setPlaylists(res.data);
  }

  useEffect(() => {
    refreshList();
  }, [isLogin]);

  // const getCookie = (name) => {
  //   let cookieValue = null;
  //   if (document.cookie && document.cookie !== '') {
  //       const cookies = document.cookie.split(';');
  //       for (let i = 0; i < cookies.length; i++) {
  //           const cookie = cookies[i].trim();
  //           // Does this cookie string begin with the name we want?
  //           if (cookie.substring(0, name.length + 1) === (name + '=')) {
  //               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  //               break;
  //           }
  //       }
  //   }
  //   return cookieValue;
  // }

  const createPlaylist = (e, playlistName) => {
    e.preventDefault();
    const csrftoken = Cookies.get("csrftoken");
    axios
      .post(
        "/api/playlists/",
        {
          name: playlistName,
        },
        {
          headers: {
            "X-CSRFToken": csrftoken,
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        refreshList();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div>
      <List>
        <ListItem>
          <CreatePlaylist createPlaylist={createPlaylist} />
        </ListItem>
        <ListItem>{renderPlaylists()}</ListItem>
      </List>
    </div>
  );
}

export default Playlist;
