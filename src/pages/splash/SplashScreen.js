import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onEnd }) => {
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass('fade-out');
      const endTimer = setTimeout(() => {
        if (onEnd) {
          onEnd();
        }
      }, 1000); // 페이드 아웃 지속 시간
      return () => clearTimeout(endTimer);
    }, 3000); // 페이드 인 지속 시간

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div className={`splash-screen ${fadeClass}`}>
      <img src="/song4ulogo.png" alt="Splash" className={`splash-image ${fadeClass}`} />
    </div>
  );
};

export default SplashScreen;