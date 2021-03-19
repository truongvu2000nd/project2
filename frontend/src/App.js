import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import axios from "axios";
import Container from './Components/container/Container.js'
// import Bo from './Components/container/Container.js'
// import Container from './Components/container/Container.js'

// const Example = () =>{
  
//   return(
//     // <Container/>
//     // <Sidebar />
//     // <BottomPlayer />
//   )
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      audioSource: "",
      play: false,
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = () => {
    axios
      .get("api/songs/")
      .then((res) => {
        this.setState({ songs: res.data });
      })
      .catch((err) => console.log(err));
  };

  renderList = () => {
    const listSong = this.state.songs.map((song) => (
      <li>
        <h3>{song.title}</h3>
        <button onClick={() => this.playSong(song.file)}>Play</button>
      </li>
    ));
    return <ul>{listSong}</ul>;
  };

  playSong = (url) => {
    this.setState({ audioSource: url })
  };

  render() {
    return (
      <div className="main">
        <div className="App">{this.renderList()}</div>
        <div className="Player">
          <audio ref="audio_tag" src={this.state.audioSource} controls autoPlay/>
        </div>
      </div>
    );
  }
}


export default App;
