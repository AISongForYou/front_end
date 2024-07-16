import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ cover, song, title, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="album-cover1">
        <img src={cover} alt="Album Cover" />
      </div>
      <div className="song-info">
        <h2>{title}</h2>
        <p>{artist}</p>
      </div>
      <div className="controls">
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button className="control-button">⋮</button>
      </div>
      <audio ref={audioRef} src={song}></audio>
    </div>
  );
};

export default MusicPlayer;