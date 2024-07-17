import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MusicResult.css";

const MusicResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData =
    location.state?.data || JSON.parse(localStorage.getItem("musicData")) || {};
  const [data, setData] = useState(initialData);
  const songs = data?.songs || [];
  const imgUrl = data?.image?.url;

  const [audios, setAudios] = useState([]);
  const [isPlaying, setIsPlaying] = useState(Array(songs.length).fill(false));

  useEffect(() => {
    if (location.state?.data) {
      setData(location.state.data);
      localStorage.setItem("musicData", JSON.stringify(location.state.data));
    }
  }, [location.state]);

  useEffect(() => {
    const audioElements = songs.map((song) => {
      const audioElement = new Audio(song.url);
      audioElement.addEventListener("ended", () => {
        setIsPlaying((prev) =>
          prev.map((playing, index) =>
            audios[index] === audioElement ? false : playing
          )
        );
      });
      return audioElement;
    });
    setAudios(audioElements);
  }, [songs]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isPlaying.some((playing) => playing)) {
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

  const togglePlayPause = (index) => {
    if (isPlaying[index]) {
      audios[index].pause();
    } else {
      audios[index].play();
    }
    setIsPlaying((prev) =>
      prev.map((playing, i) => (i === index ? !playing : playing))
    );
  };

  const handleNavigation = (path) => {
    if (isPlaying.some((playing) => playing)) {
      navigate(path);
    } else {
      navigate(path);
    }
  };

  const handleDownload = (song) => {
    const link = document.createElement("a");
    link.href = `https://cdn1.suno.ai/${song.id}.mp3`;
    link.download = `${song.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <h1 className="song-title">제목: {songs[0].title}</h1>
            <div className="songs-container">
              {songs.map((song, index) => (
                <div key={song.id} className="song-details">
                  <div className="album-cover relative">
                    <img src={imgUrl} alt="Album Cover" />
                    <h3 className="jalnan2">{`버전 ${index + 1}`}</h3>
                    <div className="flex space-x-4 mt-4">
                      <button
                        className="play-button"
                        onClick={() => togglePlayPause(index)}
                      >
                        {isPlaying[index] ? "⏸" : "▶"}
                      </button>
                      <button
                        onClick={() => handleDownload(song)}
                        className="download-button"
                      >
                        다운로드
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lyrics-section">
              <pre>{songs[0].lyric}</pre>
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
