import React from "react";

const InfoCard = ({ imgUrl, title, description, likes, views }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={imgUrl} alt="광고 이미지" className="w-20 h-20 rounded-lg" />
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex space-x-2 mt-2">
          <span className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.167 3.588a1 1 0 00.95.69h3.852c.969 0 1.371 1.24.588 1.81l-3.122 2.274a1 1 0 00-.364 1.118l1.167 3.588c.3.921-.755 1.688-1.54 1.118l-3.122-2.274a1 1 0 00-1.175 0l-3.122 2.274c-.785.57-1.84-.197-1.54-1.118l1.167-3.588a1 1 0 00-.364-1.118L2.494 8.015c-.783-.57-.38-1.81.588-1.81h3.852a1 1 0 00.95-.69l1.167-3.588z" />
            </svg>
            {views}
          </span>
          <span className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 2.757a4 4 0 015.656 0L10 3.929l1.172-1.172a4 4 0 115.656 5.656L10 18.243 3.172 8.414a4 4 0 010-5.656z" />
            </svg>
            {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
