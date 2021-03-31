import React from "react";
import Song from "./Song";

//take input as info of a list of songs as parameter
const Line = ({props, songs, addSong2Queue}) => {
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
      {/* <div className="line_text">
        <h2>Nhac dong que</h2>
      </div>

      <div className="line_descriptions">
        <h3>nhac dong que hay vcl</h3>
      </div>

      <div className="line_songs">
        <Song />
      </div> */}
      {/* <h1>{props.songs[0].title}</h1> */}
      {renderListSong()}
    </div>
  );
};

export default Line;
