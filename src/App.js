import React, { useState, useEffect } from 'react';
import './App.css';
import MainContent from './pages/main/main';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 5000); // 텍스트를 5초 동안 보여줍니다.

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="App">
      {showText ? (
        <header className="App-header">
          <h1 className="fade-in-text">당신의 비즈니스를 들려주세요</h1>
          <h1 className="slide-up-text">AI송포유</h1>
        </header>
      ) : (
        <>
          <Navbar />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default App;