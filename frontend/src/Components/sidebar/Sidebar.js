import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import Playlist from "./Playlist/Playlist";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    background: "#000000",
    color: "white",
    opacity: "0.7",
    textTransform: "capitalize",
  },
  select: {
    background: "linear-gradient(45deg, #484848 30%, #212121 90%)",
    color: "white",
    opacity: "1",
    textTransform: "capitalize",
  },
  default: {
    background: "#000000",
    color: "white",
    opacity: "1",
    textTransform: "capitalize",
  },
  icon: {
    color: "white",
  },
  title: {
    color: "white",
    textTransform: "uppercase",
  },
});

function Sidebar({ isLogin, setIsLogin }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handlePlaylistClick = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="side-bar">
      <Link
        to="/"
        className="logo"
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="tab">
        <List>
          {" "}
          >
          <ListItem
            button
            selected={selectedIndex === 0}
            classes={
              selectedIndex === 0
                ? { root: classes.select }
                : { root: classes.root }
            }
            onClick={(event) => handleListItemClick(event, 0)}
            component={Link}
            to="/"
          >
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            classes={
              selectedIndex === 1
                ? { root: classes.select }
                : { root: classes.root }
            }
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            component={Link}
            to="/library"
          >
            <ListItemIcon className={classes.icon}>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem
            button
            classes={
              selectedIndex === 2
                ? { root: classes.select }
                : { root: classes.root }
            }
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            component={Link}
            to="/search"
          >
            <ListItemIcon className={classes.icon}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          aria-label="secondary playlist folder"
          onClick={(event) => handlePlaylistClick(event)}
        >
          <ListItem
            classes={{
              default: classes.default,
            }}
          >
            <ListItemText primary="Playlist" className={classes.title} />
            {<ExpandMore className={classes.icon} />}
          </ListItem>
          <Playlist
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            classes={{
              root: classes.root,
              label: classes.label,
            }}
          ></Playlist>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
