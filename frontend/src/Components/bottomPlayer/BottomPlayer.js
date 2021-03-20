import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "./BottomPlayer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Slider from "@material-ui/core/Slider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Grid from "@material-ui/core/Grid";


function BottomPlayer(props) {
  const audioRef = useRef();
  const [isPlay, setPlay] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [queueLength, setQueueLength] = useState(0);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    setInterval(() => {
      setQueueLength(props.songs.length);
    }, 5000);
  });

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleFavorite = () => {
    setFavorite(!isFavorite);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handleTimeSliderChange = (event, newValue) => {
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue)
  }

  return (
    <div>
      <div className="Bottom-Player">
        <div className="Song-Details">
          <img
            className="Song-Thumbnail"
            src={props.songs[audioIndex].image}
            alt="song-thumbnail"
          />
          <div className="Song-Info">
            <p>{props.songs[audioIndex].title}</p>
            <br />
            <p>{props.songs[audioIndex].author}</p>
          </div>
          <div className="Favorite-Button" onClick={handleFavorite}>
            {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </div>
        </div>

        <div className="Song-Controls">
          <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
            {isPlay ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
          </div>

          <div
            className="Skip-Next"
            onClick={() => setAudioIndex((audioIndex + 1) % queueLength)}
          >
            <SkipNextIcon />
          </div>
          <div
            className="Skip-Previous"
            onClick={() => setAudioIndex((audioIndex - 1) % queueLength)}
          >
            <SkipPreviousIcon />
          </div>
        </div>

        <div className="Volume-Control">
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown style={{ color: '#c9c4c3' }} />
            </Grid>
            <Grid item xs>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp style={{ color: '#c9c4c3' }}/>
            </Grid>
          </Grid>
        </div>

        <div className="Song-Progress-Container">
          <Slider
            className="Song-Progress"
            value={currentTime}
            max={duration}
            onChangeCommitted={handleTimeSliderChange}
            aria-labelledby="continuous-slider"
          />
          <audio
            ref={audioRef}
            src={props.songs[audioIndex].file}
            onLoadedData={handleLoadedData}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            onEnded={() => setPlay(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default BottomPlayer;
