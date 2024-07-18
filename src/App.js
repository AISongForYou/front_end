import React, { useState, useEffect } from "react";
import "./App.css";
import MainContent from "./pages/main/main";
import Navbar from "./components/Navbar/Navbar";
import MusicResult from "./pages/MusicResult/MusicResult";
import QuestionPage from "./questionPage";
import LoadingPage from "./loadingPage";
import AdSelectPage from "./pages/ad/adSelect";
import "tailwindcss/tailwind.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import TabBar from "./components/tabBar";

function AppContent() {
  const [showText, setShowText] = useState(true);
  const [surveyData, setSurveyData] = useState({});
  const [resultData, setResultData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stopAllAudios = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 5000); // 텍스트를 5초 동안 보여줍니다.

    return () => clearTimeout(textTimer);
  }, []);

  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isQuestionPage = location.pathname.startsWith("/question");

  return (
    <div
      className={`flex flex-col h-screen ${
        isMainPage ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      {showText ? (
        <header className="App-header">
          <h1 className="fade-in-text">당신의 비즈니스를 들려주세요</h1>
          <h1 className="slide-up-text">AI송포유</h1>
        </header>
      ) : (
        <>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route
                path="/music-result"
                element={
                  <MusicResult
                    data={resultData}
                    isPlaying={isPlaying}
                    stopAllAudios={stopAllAudios}
                    setIsPlaying={setIsPlaying}
                  />
                }
              />
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
              <Route path="/loading-page" element={<LoadingPage />} />
              <Route path="/" element={<Navigate to="/question/1" />} />
              <Route path="/adSelect-page" element={<AdSelectPage />} />
            </Routes>
          </div>
          {!isQuestionPage && (
            <TabBar isPlaying={isPlaying} stopAllAudios={stopAllAudios} />
          )}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
