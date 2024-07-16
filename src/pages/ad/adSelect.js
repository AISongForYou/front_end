import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabBar from "../../components/tabBar";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import InfoCard from "../../components/infoCard"; // InfoCard 컴포넌트 임포트
import Modal from "../../components/modal"; // Modal 컴포넌트 임포트
import NoticeAlert from "../../components/noticeAlert";
import {
  CheckCircleIcon,
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

const AdSelectPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "green",
    icon: null,
  });

  const handleButtonClick = (page) => {
    if (page === "aiRingoPage") {
      setIsModalOpen(true);
    } else {
      setAlert({
        show: true,
        message: "준비 중이에요",
        color: "yellow",
        icon: ExclamationCircleIcon,
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAlertClose = () => {
    setAlert({ show: false, message: "", color: "green", icon: null });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* navBar 영역 */}
      <div className="bg-gray-100">
        <button
          onClick={() => navigate("/music-result")}
          className="flex items-center my-4 mx-4 text-blue-500 text-lg font-bold mt-20"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          뒤로가기
        </button>
        {/* <p className="text-gray-800 text-2xl text-center font-bold">광고하기</p> */}
      </div>
      {/* 콘텐츠 영역 */}
      <div className="flex-grow bg-gray-100 px-4 py-10">
        <div className="w-full max-w-screen-md mx-auto space-y-6">
          <button
            className="w-full h-24 bg-blue-600 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md"
            onClick={() => handleButtonClick("aiRingoPage")}
          >
            KT 링고
            <div className="font-medium">- ○○○할 수 있어요</div>
          </button>
          <button
            className="w-full h-24 bg-blue-400 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md"
            onClick={() => handleButtonClick("comingSoon")}
          >
            KT V컬러링
            <div className="font-medium">- ○○○할 수 있어요</div>
          </button>
          <button
            className="w-full h-24 bg-gray-400 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md"
            onClick={() => handleButtonClick("comingSoon")}
          >
            KT 바로광고
            <div className="font-medium">- 준비 중이에요</div>
          </button>
          <button
            className="w-full h-24 bg-gray-400 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md"
            onClick={() => handleButtonClick("comingSoon")}
          >
            KT 광고대행
            <div className="font-medium">- 준비 중이에요</div>
          </button>
        </div>
      </div>
      {/* tabBar 영역 */}
      {/* <TabBar /> */}

      {/* Modal 영역 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* NoticeAlert 영역 */}
      {alert.show && (
        <NoticeAlert
          message={alert.message}
          onClose={handleAlertClose}
          color={alert.color}
          icon={alert.icon}
        />
      )}
    </div>
  );
};

export default AdSelectPage;
