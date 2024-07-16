import React, { useState, useEffect } from 'react';
import './App.css';
import MainContent from './pages/main/main';
import Navbar from './components/Navbar/Navbar';
import MusicResult from './pages/MusicResult/MusicResult';
import QuestionPage from "./questionPage";
import LoadingPage from "./loadingPage";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [showText, setShowText] = useState(true);
  const [surveyData, setSurveyData] = useState({});
  const [resultData, setResultData] = useState(null);

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
              <Route path="/music-result" element={<MusicResult data={resultData} />} />
              <Route path="/" element={<Navigate to="/question/1" />} />
              <Route
                path="/question/:id"
                element={
                  <QuestionPage
                    surveyData={surveyData}
                    setSurveyData={setSurveyData}
                  />
                }
              />
              <Route path="/loading-page" element={<LoadingPage setResultData={setResultData} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;