import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MusicResult.css";

const MusicResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData =
    location.state?.data || JSON.parse(localStorage.getItem("musicData")) || {};
  const [data, setData] = useState(initialData);
  const song = data?.songs?.[0];
  const imgUrl = data?.image?.url;

  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (location.state?.data) {
      setData(location.state.data);
      localStorage.setItem("musicData", JSON.stringify(location.state.data));
    }
  }, [location.state]);

  useEffect(() => {
    if (song) {
      const audioElement = new Audio(song.url);
      audioElement.addEventListener("ended", () => setIsPlaying(false));
      setAudio(audioElement);
    }
  }, [song]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isPlaying) {
        event.preventDefault();
        event.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNavigation = (path) => {
    if (isPlaying) {
      // if (window.confirm("음악이 재생 중입니다. 이동하시겠습니까?")) {
      //   audio.pause();
      //   setIsPlaying(false);
      navigate(path);
    } else {
      navigate(path);
    }
  };

  if (!data?.songs) {
    return <div>Loading...</div>; // 또는 적절한 대체 UI
  }

  return (
    <div className="bg-gray">
      <div className="flex flex-col h-screen pt-16 pb-16">
        <div className="p-6 overflow-auto flex-grow">
          <div className="music-result">
            <h2 className="jalnan">
              나만의 AI 작곡가가 만든 새로운 곡을 감상해보세요!
            </h2>
            <div className="song-details">
              <div className="album-cover">
                <img src={imgUrl} alt="Album Cover" />
                <h3 className="jalnan2">{song.title}</h3>
                <button className="play-button" onClick={togglePlayPause}>
                  {isPlaying ? "⏸" : "▶"}
                </button>
              </div>
            </div>

            <div className="lyrics-section">
              <pre>{song.lyric}</pre>
            </div>
            <button
              className="create-song-button"
              onClick={() => handleNavigation("/adSelect-page")}
            >
              지금 바로 광고하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicResult;
