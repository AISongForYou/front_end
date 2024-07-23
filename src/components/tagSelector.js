import React, { useState } from "react";

const tags = [
  "팝",
  "R&B",
  "힙합",
  "인디",
  "락",
  "뮤지컬",
  "케이팝",
  "컨트리",
  "동요",
  "발라드",
  "댄스",
  "트로트",
  "재즈",
  "클래식",
  "EDM",
  "하우스",
  "테크노",
  "펑크",
  "레게",
  "제이팝",
  "중국팝",
  "어쿠스틱",
  "보사노바",
  "삼바",
  "탱고",
];

function TagSelector({
  selectedTags,
  setSelectedTags,
  customGenre,
  setCustomGenre,
}) {
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 2) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className="p-4 bg-gray-100 text-gray-700 rounded-md">
      <h2 className="text-lg mb-2 text-gray-700">장르(최대 2개)</h2>
      <div className="mb-4">
        {selectedTags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-blue-400 text-white py-1 px-3 rounded-full mr-2 mb-2 relative"
          >
            {tag}
            <span
              onClick={() => removeTag(tag)}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 cursor-pointer bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center"
            >
              &times;
            </span>
          </span>
        ))}
      </div>
      <div className="flex overflow-x-scroll space-x-2 pb-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`py-2 px-4 rounded-full whitespace-nowrap ${
              selectedTags.includes(tag)
                ? "bg-blue-400 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <label className="block text-lg mb-2 ml-2">추가 장르 입력</label>
        <input
          type="text"
          value={customGenre}
          onChange={(e) => setCustomGenre(e.target.value)}
          placeholder="자유롭게 음악스타일을 입력해주세요.(예: 차분한 느낌)"
          className="w-full p-3 text-base rounded-md border-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
    </div>
  );
}

export default TagSelector;
