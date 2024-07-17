import React from "react";
import { useMusic } from "../pages/MusicContext/musicContext.js";

const MusicPopup = () => {
  const { isPlaying, togglePlayPause, currentSong } = useMusic();

  if (!currentSong) return null;

  return (
    <div className="music-popup">
      <div className="music-popup-content">
        <div>{currentSong.title}</div>
        <button onClick={togglePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
      </div>
    </div>
  );
};

export default MusicPopup;
