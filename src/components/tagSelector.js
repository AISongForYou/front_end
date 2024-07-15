import React, { useState } from "react";

const tags = [
  "mambo",
  "latin pop",
  "latin rock",
  "spanish",
  "salsa",
  "bossa nova",
  "samba",
  "pachanga",
  "rock en español",
];

function TagSelector() {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <div className="p-4 text-darkgrey">
      <h2 className="mb-2">음악 장르 선택</h2>
      <div className="flex overflow-x-scroll space-x-2 pb-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`py-2 px-4 text-white rounded-full whitespace-nowrap ${
              selectedTags.includes(tag) ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="mb-2">선택된 항목</h3>
        <div className="flex flex-wrap space-x-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="py-1 px-3 bg-blue-600 text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagSelector;
