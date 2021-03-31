import React, { useState } from "react";
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

function App() {
  const [queue, setQueue] = useState([]);

  const addSong2Queue = (song) => {
    setQueue([...queue, song]);
    console.log(queue);
  }

  return (
    <div className="App">
      <div className="App-Container">
        <Sidebar />
        <Container addSong2Queue={addSong2Queue} />
        <BottomPlayer queue={queue} />
      </div>
    </div>
  )
}

export default App;
