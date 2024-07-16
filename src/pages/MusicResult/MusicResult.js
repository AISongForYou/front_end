import React from 'react';
import './MusicResult.css';
import { useNavigate } from "react-router-dom";

const MusicResult = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state || {};
  const song = data?.songs[0];
  const imgUrl = data?.image.url;
  
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (song) {
      setAudio(new Audio(song.url));
    }
  }, [song]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-result">
      <h2>나만의 AI 작곡가가 만든 새로운 곡을 감상해보세요</h2>
      <div className="song-details">
        <div className="album-cover">
          <img src={imgUrl} alt="Album Cover" />
          <h3>{song.title}</h3>
          <button className="play-button" onClick={togglePlayPause}>
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
      </div>
      <div className="lyrics-section">
        <pre>{song.lyric}</pre>
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
