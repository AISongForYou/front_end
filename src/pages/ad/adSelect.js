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
  const [modalData, setModalData] = useState(null); // 모달에 전달할 데이터 상태

  const handleButtonClick = (page) => {
    if (page === "aiRingoPage") {
      const storedData = JSON.parse(localStorage.getItem("musicData"));
      setModalData(storedData); // localStorage에서 데이터 가져오기
      setIsModalOpen(true);
    } else {
      setAlert({
        show: true,
        message: "AI송포유 정식 출시 후 만나요!",
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
    <div className="flex flex-col h-screen pb-16 pt-16 bg-gray-100">
      <div className="p-6 overflow-auto flex-grow">
        {/* navBar 영역 */}
        <button
          onClick={() => navigate("/music-result")}
          className="flex items-center my-4 mx-4 text-blue-500 text-lg font-bold"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          뒤로가기
        </button>
        {/* 콘텐츠 영역 */}
        <div className="flex-grow px-4 py-10">
          <div className="w-full max-w-screen-md mx-auto space-y-6">
            <button
              className="w-full h-24 bg-blue-600 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md px-4"
              onClick={() => handleButtonClick("aiRingoPage")}
            >
              KT 링고
              <div className="font-medium text-base">
                - 사업장 전화에 지금 제작한 CM송으로 통화연결음을 설정할 수
                있어요!
              </div>
            </button>
            <button
              className="w-full h-24 bg-blue-400 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md px-4"
              onClick={() => handleButtonClick("comingSoon")}
            >
              KT V컬러링
              <div className="font-medium text-base">
                - 이미지와 함께 CM송으로 보이는 컬러링을 설정할 수 있어요!
              </div>
            </button>
            <button
              className="w-full h-24 bg-gray-400 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md px-4"
              onClick={() => handleButtonClick("comingSoon")}
            >
              KT 바로광고
              <div className="font-medium text-base">
                - 준비중인 서비스입니다.
              </div>
            </button>
            <button
              className="w-full h-24 bg-gray-400 text-white rounded-lg flex flex-col justify-center items-center text-lg font-bold shadow-md px-4"
              onClick={() => handleButtonClick("comingSoon")}
            >
              KT 광고대행
              <div className="font-medium text-base">
                - 준비중인 서비스입니다.
              </div>
            </button>
          </div>
        </div>

        {/* Modal 영역 */}
        <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />

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
    </div>
  );
};

export default AdSelectPage;
