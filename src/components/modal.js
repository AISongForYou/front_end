import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import InfoCard from "./infoCard"; // InfoCard 컴포넌트 임포트
import NoticeAlert from "./noticeAlert"; // NoticeAlert 컴포넌트 임포트

const Modal = ({ isOpen, onClose, data }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAdClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  const { title, description } = data?.songs?.[0] || {
    title: "No Title",
    description: "No Description",
  };
  const imageUrl = data?.image?.url || "https://via.placeholder.com/150";
  const likes = 77;
  const views = 777;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg p-6">
          <button
            onClick={onClose}
            className="flex items-center mb-4 text-blue-500"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            뒤로가기
          </button>
          <div className="w-full h-full overflow-y-auto space-y-4">
            <div className="flex items-center space-x-4">
              <InfoCard
                imageUrl={imageUrl}
                title={title}
                description={description}
                likes={likes}
                views={views}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-bold shadow-md"
              onClick={handleAdClick}
            >
              KT 링고로 광고하기
            </button>
            <div className="space-y-4">
              <div>
                {" "}
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
      {showAlert && (
        <NoticeAlert message="적용됐습니다." onClose={handleAlertClose} />
      )}
    </>
  );
};

export default Modal;
