import React from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ cover, song, title, artist }) => {
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
        <button className="control-button">▶</button>
        <button className="control-button">⋮</button>
      </div>
    </div>
  );
};

export default MusicPlayer;