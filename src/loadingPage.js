import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payload = location.state?.payload; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://songforyou.azurewebsites.net/generate', payload); 
        console.log("성공:", response.data);
        navigate('/music-result', { state: { data: response.data } });
      } catch (error) {
        console.error("에러:", error);
        console.log(error['request']);
        // Handle error if needed
      }
    };

    fetchData();
  }, [navigate, payload]); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-lg">
        <div className="relative pb-9/16">
          <video
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