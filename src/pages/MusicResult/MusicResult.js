import React from "react";
import "./MusicResult.css";
import { useNavigate } from "react-router-dom";

const MusicResult = () => {
  const navigate = useNavigate();

  return (
    <div className="music-result">
      <h2>나만의 AI 작곡가가 만든 새로운 곡을 감상해보세요</h2>
      <div className="song-details">
        <div className="album-cover">
          <img src="./song1_cover.png" alt="Album Cover" />
          <h3>한 번에 한 번에</h3>
          <button className="play-button">▶</button>
        </div>
      </div>
      <div className="lyrics-section">
        <p>[Verse]</p>
        <p>한 번에 한 번에 빠르게 해결해</p>
        <p>일사천리시스템으로 편하게 이사를 해</p>
        <p>대한민국 기업이사의 1위 우리는 최고라고</p>
        <p>자신있게 말해 새로운 사무실로 활짝 웃을 시간</p>
        <p>[Verse 2]</p>
        <p>일사천리로 빠르게 완성해 나간다네</p>
        <p>아무리 복잡하더라도 걱정은 마</p>
        <p>이사 천리길을 걸어 나가 모두 맞이해</p>
        <p>한 번에 한 번에</p>
        <p>일사천리로 빠르게 완성해 나간다네</p>
        <p>아무리 복잡하더라도 걱정은 마</p>
        <p>이사 천리길을 걸어 나가 모두 맞이해</p>
        <p>한 번에 한 번에</p>
      </div>
      <button
        className="create-song-button"
        onClick={() => navigate("/adSelect-page")}
      >
        지금 바로 광고하기
      </button>
    </div>
  );
};

export default MusicResult;
