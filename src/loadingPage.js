import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payload = location.state?.payload;
  const videoRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        const response = await axios.post(
          "https://songforyou.azurewebsites.net/generate",
          payload
        );
        console.log("성공:", response.data);
        // Check if any part of response.data is null
        if (Object.values(response.data).some(value => value === null)) {
          setError(true);
        } else {
          navigate("/music-result", { state: { data: response.data } });
        }
      } catch (error) {
        console.error("에러:", error);
        setError(true);
      }
    };

    fetchData();
  }, []); // 종속성 배열을 빈 배열로 설

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  }, []);

  const handleRetry = () => {
    navigate("/");
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="p-6 bg-red-100 rounded-lg shadow-lg">
          <p className="text-lg text-red-500">재시도 해주세요.</p>
          <p className="text-sm text-gray-500 mb-4">잠시 후 메인 페이지로 돌아갑니다.</p>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            메인 페이지로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-lg">
        <div className="relative pb-9/16">
          <video
            ref={videoRef}
            src={`${process.env.PUBLIC_URL}/loadingVideo.mp4`}
            className="absolute top-0 left-0 w-full h-full"
            controls
            autoPlay
            loop
          ></video>
        </div>
      </div>
      <div className="flex items-center mt-8 space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>
      <p className="mt-4 text-lg text-blue-500">
        멋진 노래가 만들어지고 있어요!
      </p>
      <p className="text-sm text-gray-500">잠시만 기다려주세요.</p>
    </div>
  );
};

export default LoadingPage;