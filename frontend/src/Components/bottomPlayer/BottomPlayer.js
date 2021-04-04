import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
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
import logo from "./Logo.png";

function BottomPlayer({props, queue}) {
  const audioRef = useRef();
  const [isPlay, setPlay] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    if (queue.length > 0) {
      setAudioIndex(queue.length - 1);
    }
    setPlay(true);
  }, [queue]);

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
    setVolume(newValue);
  };

  if (queue.length === 0) {
    return (
      <div className="bottom-player">
        <div className="song-details">
          <img
            className="song-thumbnail"
            src={logo}
            alt="song-thumbnail"
          />
          <div className="song-info">
            <p>No music</p>
            <br />
            <p></p>
          </div>
          <div className="favorite-button">
            {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </div>
        </div>
  
        <div className="song-controls">
          <div className="pause-play-button">
            <PlayCircleOutlineIcon />
          </div>
          <div className="skip-next"><SkipNextIcon /></div>
          <div className="skip-previous"><SkipPreviousIcon /></div>
        </div>
        <div className="volume-control">
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown style={{ color: "#c9c4c3" }} />
            </Grid>
            <Grid item xs>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp style={{ color: "#c9c4c3" }} />
            </Grid>
          </Grid>
        </div>
        <div className="song-progress-container">
          <Slider
            className="song-progress"
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bottom-player">
      <div className="song-details">
        <img
          className="song-thumbnail"
          src={queue[audioIndex].image}
          alt="song-thumbnail"
        />
        <div className="song-info">
          <p>{queue[audioIndex].title}</p>
          <br />
          <p>{queue[audioIndex].author}</p>
        </div>
        <div className="favorite-button" onClick={handleFavorite}>
          {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </div>
      </div>

      <div className="song-controls">
        <div className="pause-play-button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </div>

        <div
          className="skip-next"
          onClick={() => setAudioIndex((audioIndex + 1) % queue.length)}
        >
          <SkipNextIcon />
        </div>
        <div
          className="skip-previous"
          onClick={() => setAudioIndex((audioIndex - 1 + queue.length) % queue.length)}
        >
          <SkipPreviousIcon />
        </div>
      </div>

      <div className="volume-control">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown style={{ color: "#c9c4c3" }} />
          </Grid>
          <Grid item xs>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <VolumeUp style={{ color: "#c9c4c3" }} />
          </Grid>
        </Grid>
      </div>

      <div className="song-progress-container">
        <Slider
          className="song-progress"
          value={currentTime ? currentTime : 0}
          max={duration}
          onChangeCommitted={handleTimeSliderChange}
          aria-labelledby="continuous-slider"
        />
        <audio
          ref={audioRef}
          src={queue[audioIndex].file}
          onLoadedData={handleLoadedData}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onEnded={() => setPlay(false)}
        />
      </div>
    </div>
  );
}

export default BottomPlayer;
