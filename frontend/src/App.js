import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import axios from "axios";
import Container from "./Components/container/Container.js";
import BottomPlayer from "./Components/bottomPlayer/BottomPlayer.js";
import Sidebar from "./Components/sidebar/Sidebar.js";
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
      songs: [
        {
          id: 1,
          title: "Trying",
          author: "Leo",
          file: "http://127.0.0.1:8000/media/musics/Leo_-_Trying.mp3",
          image:
            "http://127.0.0.1:8000/media/imgs/trying-album-cover_A6ClXRl.jpg",
        },
        {
          id: 2,
          title: "Rock Star",
          author: "Post Malone",
          file:
            "http://127.0.0.1:8000/media/musics/Post_Malone_-_rockstar_ft._21_Savage_1_PtrFFys.mp3",
          image: "http://127.0.0.1:8000/media/imgs/postmalone_mKFCSuO.jpg",
        },
      ],
      audioSource: "",
      play: false,
    };
  }

  // componentDidMount() {
  //   this.getSongs();
  // }

//   getSongs = () => {
//     axios
//       .get("api/songs/")
//       .then((res) => {
//         this.setState({ songs: res.data });
//       })
//       .catch((err) => console.log(err));
//   };

//   renderList = () => {
//     const listSong = this.state.songs.map((song) => (
//       <li>
//         <h3>{song.title}</h3>
//         <button onClick={() => this.playSong(song.file)}>Play</button>
//       </li>
//     ));
//     return <ul>{listSong}</ul>;
//   };

  playSong = (url) => {
    this.setState({ audioSource: url });
  };

  render() {
    return (
      <div className="App">
        <BottomPlayer songs={this.state.songs} />
        <Sidebar className="side_bar"> </Sidebar>
      </div>
    );
  }
}

export default App;