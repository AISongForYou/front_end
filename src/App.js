import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './pages/main/main';
import Navbar from './components/Navbar/Navbar';
import MusicResult from './pages/MusicResult/MusicResult'; // MusicResult 컴포넌트 경로를 맞춰주세요

function App() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 5000); // 텍스트를 5초 동안 보여줍니다.

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <Router>
      <div className="App">
        {showText ? (
          <header className="App-header">
            <h1 className="fade-in-text">당신의 비즈니스를 들려주세요</h1>
            <h1 className="slide-up-text">AI송포유</h1>
          </header>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/music-result" element={<MusicResult />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
