import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Navbar from "../../components/Navbar/Navbar";

const AiRingoPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/ad-select");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* 콘텐츠 영역 */}
      <div className="flex-grow bg-gray-100 p-4 mt-20">
        <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/150"
              alt="광고 이미지"
              className="w-20 h-20 rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">No빌런 헬스장</h2>
              <p className="text-sm text-gray-500">Pop energetic dance</p>
              <div className="flex space-x-2 mt-2">
                <span className="flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.167 3.588a1 1 0 00.95.69h3.852c.969 0 1.371 1.24.588 1.81l-3.122 2.274a1 1 0 00-.364 1.118l1.167 3.588c.3.921-.755 1.688-1.54 1.118l-3.122-2.274a1 1 0 00-1.175 0l-3.122 2.274c-.785.57-1.84-.197-1.54-1.118l1.167-3.588a1 1 0 00-.364-1.118L2.494 8.015c-.783-.57-.38-1.81.588-1.81h3.852a1 1 0 00.95-.69l1.167-3.588z" />
                  </svg>
                  80
                </span>
                <span className="flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3.172 2.757a4 4 0 015.656 0L10 3.929l1.172-1.172a4 4 0 115.656 5.656L10 18.243 3.172 8.414a4 4 0 010-5.656z" />
                  </svg>
                  27
                </span>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-bold shadow-md">
            KT 링고로 광고하기
          </button>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">사업장 전화번호</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
                defaultValue="02-123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-700">본인인증</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
                defaultValue="본인인증 완료"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">결제 방법</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm">
                <option>신용카드</option>
                <option>계좌이체</option>
                <option>휴대폰 결제</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiRingoPage;
