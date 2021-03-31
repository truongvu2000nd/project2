import React from 'react'
import './container.css'

const Song = ({props, song, addSong2Queue}) => {
    return (
        <div className="song"  onClick={() => addSong2Queue(song)}>
            <div>
                <img className="song_img" src={song.image} alt="cover_img"></img>
            </div>
            <div className="song_info">
                <h3 className="song_name" >{song.title}</h3>
                <h4 className="song_description" ></h4>

            </div>

        </div>
    )
}

export default Song
