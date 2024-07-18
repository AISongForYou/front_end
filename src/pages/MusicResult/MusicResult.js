import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import NavTabs from "../../components/NavTabs/navTabs.js";
import "./MusicResult.css";

const MusicResult = ({ isPlaying, stopAllAudios, setIsPlaying }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData =
    location.state?.data || JSON.parse(localStorage.getItem("musicData")) || {};
  const [data, setData] = useState(initialData);
  const songs = data?.songs || [];

  const [audios, setAudios] = useState([]);
  const [isPlayingState, setIsPlayingState] = useState(
    Array(songs.length).fill(false)
  );

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (location.state?.data) {
      setData(location.state.data);
      localStorage.setItem("musicData", JSON.stringify(location.state.data));
    }
  }, [location.state]);

  useEffect(() => {
    const audioElements = songs.map((song, index) => {
      const audioElement = new Audio(song.url);
      audioElement.addEventListener("ended", () => {
        setIsPlayingState((prevState) =>
          prevState.map((playing, i) => (i === index ? false : playing))
        );
      });
      return audioElement;
    });
    setAudios(audioElements);
  }, [songs]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isPlayingState.some((playing) => playing)) {
        event.preventDefault();
        event.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlayingState]);

  const togglePlayPause = (index) => {
    setIsPlayingState((prevIsPlayingState) =>
      prevIsPlayingState.map((playing, i) => {
        if (i === index) {
          if (playing) {
            audios[i].pause();
          } else {
            audios.forEach((audio, j) => {
              if (j !== i) {
                audio.pause();
              }
            });
            audios[i].play();
          }
          return !playing;
        } else {
          return false;
        }
      })
    );
  };

  const handleNavigation = (path) => {
    if (isPlayingState.some((playing) => playing)) {
      const confirmNavigation = window.confirm(
        "페이지를 이동하면 노래가 중지됩니다. 계속하시겠습니까?"
      );
      if (confirmNavigation) {
        audios.forEach((audio) => audio.pause());
        setIsPlayingState(Array(songs.length).fill(false));
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  const handleDownload = async (song) => {
    try {
      const response = await fetch(song.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${song.title}.mp3`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  const handleTabChange = (index) => {
    if (isPlayingState.some((playing) => playing)) {
      const confirmTabChange = window.confirm(
        "탭을 변경하면 노래가 중지됩니다. 계속하시겠습니까?"
      );
      if (confirmTabChange) {
        audios.forEach((audio) => audio.pause());
        setIsPlayingState(Array(songs.length).fill(false));
        setActiveTab(index);
      }
    } else {
      setActiveTab(index);
    }
  };

  if (!data?.songs) {
    return <div>Loading...</div>; // 또는 적절한 대체 UI
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray">
      <div className="flex flex-col h-screen pt-16 pb-16">
        <div className="p-6 overflow-auto flex-grow">
          <div className="music-result">
            <h2 className="jalnan">
              나만의 AI 작곡가가 만든 새로운 곡을 감상해보세요!
            </h2>
            <h1 className="song-title">제목: {songs[0]?.title}</h1>
            <NavTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onTabChange={handleTabChange}
            />
            <Slider {...sliderSettings}>
              {songs.map((song, index) => (
                <div key={song.id} className="song-details">
                  <div className="album-cover relative">
                    <img src={song.imgUrl} alt="Album Cover" />
                    <div className="flex space-x-4 mt-4">
                      <button
                        className="play-button"
                        onClick={() => togglePlayPause(index)}
                      >
                        {isPlayingState[index] ? "⏸" : "▶"}
                      </button>
                      <button
                        onClick={() => handleDownload(song)}
                        className="download-button"
                      >
                        다운로드
                      </button>
                    </div>
                  </div>
                  <div className="lyrics-section">
                    <pre>{song.lyric}</pre>
                  </div>
                </div>
              ))}
            </Slider>
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
