import React from "react";
import Song from "./Song";

//take input as info of a list of songs as parameter
const Line = ({ songs, addSong2Queue}) => {
  const renderListSong = () => {
    const listSong = songs.map((song) => (
      <li>
        <div className="line_text">
          <h2>{song.genre}</h2>
        </div>
        {/* <div className="line_descriptions">
          <h3></h3>
        </div> */}
        <div className="line_songs">
          <Song song={song} addSong2Queue={addSong2Queue}/>
        </div>
      </li>
    ));
    return <ul>{listSong}</ul>;
  };

  return (
    <div className="line">
      {renderListSong()}
    </div>
  );
};

export default Line;
