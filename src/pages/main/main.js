import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer.js";
import PromoSection from "../../components/PromoSection/promoSection.js";
import TabBar from "../../components/tabBar.js";

const MainContent = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/question/1"); // 첫 번째 질문 페이지로 이동
  };

  return (
    <div className="no-scroll mt-11 p-4">
      <div className="section-container">
        <div>
          <h2 className="text-gray-500 kopub">
            쉽고 빠른 맞춤형 AI 광고 음악 플랫폼
          </h2>
          <h1 className="text-2xl font-bold mt-2">
            당신의 비즈니스를 들려주세요
          </h1>
          <h1 className="text-3xl text-blue-500 mt-1 jalnan text-left pl-0">
            AI 송포유
          </h1>
        </div>
      </div>
      <div className="section-container mt-8">
        <p className="text-gray-700">이런 노래들을 만들 수 있어요.</p>
        <div>
          <div>
            <MusicPlayer
              cover="./song1_cover.png"
              song="./100_.mp4"
              title="미라클 100"
              artist="pop electronic"
            />
          </div>
          <div>
            <MusicPlayer
              cover="./song2_cover.png"
              song="./AI_.mp4"
              title="AI 송포유"
              artist="playful pop rhythmic"
            />
          </div>
        </div>
      </div>
      <PromoSection onClick={handleStartClick} />
      <TabBar />
    </div>
  );
};

export default MainContent;
