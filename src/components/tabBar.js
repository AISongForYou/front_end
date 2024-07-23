import React from "react";
import { HomeIcon, MusicalNoteIcon } from "@heroicons/react/20/solid"; // heroicons v2 사용

const TabBar = ({ isPlaying, stopAllAudios, handleNavigation }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around py-2">
      <button
        onClick={() => handleNavigation("/")}
        className="text-blue-500 flex flex-col font-bold items-center border-r border-gray-300 w-1/2"
      >
        <HomeIcon className="w-6 h-6 mb-1" />홈
      </button>
      <button
        onClick={() => handleNavigation("/question/1")}
        className="text-blue-500 flex flex-col font-bold items-center border-r border-gray-300 w-1/2"
      >
        <MusicalNoteIcon className="w-6 h-6 mb-1" />
        음악 생성
      </button>
    </div>
  );
};

export default TabBar;
