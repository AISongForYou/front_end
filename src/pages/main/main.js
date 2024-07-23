import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "./main.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer.js";
import PromoSection from "../../components/PromoSection/promoSection.js";
import TabBar from "../../components/tabBar.js";
import MusicResult from "../MusicResult/MusicResult.js";

const MainContent = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const audioElements = [new Audio("./100_.mp4"), new Audio("./AI_.mp4")];
    setAudios(audioElements);
  }, []);

  const handleStartClick = () => {
    navigate("/question/1"); // 첫 번째 질문 페이지로 이동
  };

  const togglePlayPause = (index) => {
    setIsPlaying((prev) => {
      if (prev) {
        audios.forEach((audio) => audio.pause());
        return false;
      } else {
        audios[index].play();
        return true;
      }
    });
  };

  const stopAllAudios = () => {
    audios.forEach((audio) => audio.pause());
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col h-screen pt-16 pb-20">
      <div className="p-6 overflow-auto flex-grow">
        <div className="section-container">
          <div>
            <h2 className="text-gray-500 kopub">
              쉽고 빠른 맞춤형 AI 광고 음악 플랫폼
            </h2>
            <h1 className="text-2xl font-bold mt-2">
              당신의 비즈니스를 들려주세요
            </h1>
            <h1 className="jalnan text-5xl text-blue-500 mt-1  text-left pl-0">
              AI 송포유
            </h1>
          </div>
        </div>
        <div className="section-container mt-8">
          <p className="text-gray-700">이런 노래들을 만들 수 있어요.</p>
          <div>
            <div>
              <MusicPlayer
                cover="./main2_.png"
                song="./100_.mp4"
                title="미라클 100"
                artist="pop electronic"
                onPlayPause={() => togglePlayPause(0)}
              />
            </div>
            <div>
              <MusicPlayer
                cover="./main1_.png"
                song="./AI_.mp4"
                title="AI 송포유"
                artist="playful pop rhythmic"
                onPlayPause={() => togglePlayPause(1)}
              />
            </div>
          </div>
        </div>
        <PromoSection onClick={handleStartClick} />
      </div>
    </div>
  );
};

export default MainContent;
