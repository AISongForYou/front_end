import React from "react";

const PromoSection = ({ onClick }) => {
  return (
    <div
      className="section-container mt-8 bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 rounded-lg cursor-pointer relative"
      onClick={onClick}
    >
      <p className="text-lg">당신의 비즈니스를 들려주세요</p>
      <h2 className="text-2xl font-bold mt-2 text-white">
        맞춤형<br></br>AI 광고음악
      </h2>
      <button className="mt-4 bg-white text-indigo-600 font-bold py-2 px-4 rounded-full">
        지금 광고음악 만들기 ▶
      </button>
      <img
        src="./promoImage.png"
        alt="hihi"
        className="absolute bottom-0 right-0 w-32 h-40 md:w-48 md:h-48"
        style={{ objectFit: "cover", borderRadius: "0 0 0 0" }}
      />
    </div>
  );
};

export default PromoSection;
