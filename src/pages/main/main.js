import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';
import MusicPlayer from '../MusicPlayer/MusicPlayer.js';

const MainContent = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/question/1'); // 첫 번째 질문 페이지로 이동
  };

  return (
    <div className="main-content">
      <div className="section">
        <div>
          <h2>쉽고 빠른 맞춤형 AI 광고 음악 플랫폼</h2>
          <h1>당신의 비즈니스를 들려주세요</h1>
          <h1 className="highlight">AI 송포유</h1>
        </div>
      </div>
      <div className="section">
        <div className="search-bar-container">
          <div className="search-bar">
            <input type="text" placeholder="어떤 스타일의 음악을 원하시나요?" />
            <button className="search-button">
              <img src="./search.png" alt="Search" className="search-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="promo-section">
          <div className="promo-text">
            <p>당신의 비즈니스를 들려주세요</p>
            <br/>
            <h2>맞춤형 <br />AI 광고음악</h2>
            <br/>
            <button className="promo-button" onClick={handleStartClick}>
              지금 광고음악 만들기 ▶
            </button>
          </div>
          <div className="promo-image">
            <img src="./누끼.png" alt="Promo" />
          </div>
        </div>
      </div>
      <div className="section">
        <MusicPlayer
          cover="./song1_cover.png"
          song="./100_.mp4"
          title="미라클 100"
          artist="pop electronic"
        />
      </div>
      <div className="section">
        <MusicPlayer
          cover="./song2_cover.png"
          song="./AI_.mp4"
          title="AI 송포유"
          artist="playful pop rhythmic"
        />
      </div>
    </div>
  );
};

export default MainContent;