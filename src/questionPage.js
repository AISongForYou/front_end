import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import RefuseAlert from "./components/refuseAlert";
import TagSelector from "./components/tagSelector";
import Toggle from "./components/toggle";

const questions = [
  {
    text: "노래에 담을 당신의\n비즈니스를 소개해주세요.",
    placeholders: [
      "홍보하고자 하는 비즈니스 내용을 입력해주세요.",
      "홍보하고자 하는 제품/서비스명을 입력해주세요.",
    ],
    required: [true, false],
    titles: ["비즈니스 소개", "제품/서비스"],
    tipsTitle: ["노래 잘 뽑는 법 1"],
    tips: [
      "홍보하고자 하는 서비스나 매장명을 입력하면 좋아요.",
      "꼭 필요한 내용만 간단히 입력해주세요.",
    ],
    example:
      "비즈니스 소개: 1억원대의 산소공급기와 함께 요가와 명상을 제공하는 희소 요가원\n서비스명: 청정 요가수업",
  },
  {
    text: "만들고 싶은 노래 장르와\n강조할 내용을 입력해 주세요.",
    placeholders: ["노래에 꼭 어필되었으면 하는 내용을 입력해주세요."],
    required: [true],
    titles: ["강조할 내용"],
    tipsTitle: ["노래 잘 뽑는 법 2"],
    tips: ["우리 가게만의 특/장점 서비스 혹은 이벤트를 소개해주세요."],
    example: "첫 방문 고객에게 요가 매트 무료 제공 이벤트를 홍보하고 싶어요.",
  },
  {
    text: "광고이미지도!!! 제작해드립니다.",
    placeholders: [
      "광고 사진에 담겼으면 하는 느낌이나 스타일을 입력해주세요.",
      "이미지에 들어갔으면 하는 광고 문구를 입력해주세요.",
    ],
    required: [false, false],
    titles: ["이미지 분위기", "광고 이미지 문구"],
    tipsTitle: ["광고 이미지 잘 뽑는 법"],
    tips: [
      "비즈니스와 어울리는 이미지 스타일을 입력하면 좋아요.",
      "이미지 문구는 간결하게 입력해주세요.",
    ],
    example:
      "이미지 분위기: 숲속의 느낌, 자연의 색감, 명상하는 사람들\n광고 이미지 문구: First Visit Free, 7월 여름맞이 30% 할인",
  },
];

function QuestionPage({ surveyData, setSurveyData }) {
  const { id } = useParams();
  const questionId = parseInt(id, 10);
  const navigate = useNavigate();
  const currentQuestion = questions[questionId - 1];
  const [answers, setAnswers] = useState(
    surveyData[questionId]?.answers ||
      currentQuestion.placeholders.map(() => "")
  );
  const [showAlert, setShowAlert] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [toggles, setToggles] = useState(
    currentQuestion.required.map((isRequired) => isRequired)
  );
  const [selectedTags, setSelectedTags] = useState(
    surveyData[questionId]?.selectedTags || []
  );

  useEffect(() => {
    setAnswers(
      surveyData[questionId]?.answers ||
        currentQuestion.placeholders.map(() => "")
    );
    setShowAlert(false);
    setToggles(currentQuestion.required.map((isRequired) => isRequired));
    setSelectedTags(surveyData[questionId]?.selectedTags || []);
  }, [
    questionId,
    surveyData,
    currentQuestion.placeholders,
    currentQuestion.required,
  ]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleToggleChange = (index, value) => {
    const newToggles = [...toggles];
    newToggles[index] = value;
    setToggles(newToggles);
    if (!value) {
      handleChange(index, ""); // Clear the answer if toggled off
    }
  };

  const handleNext = () => {
    if (
      currentQuestion.required.some(
        (isRequired, index) => isRequired && answers[index].trim() === ""
      ) ||
      (questionId === 2 && selectedTags.length === 0)
    ) {
      setShowAlert(true);
      return;
    }

    const newSurveyData = {
      ...surveyData,
      [questionId]: { answers, selectedTags },
    };
    setSurveyData(newSurveyData);

    if (questionId < questions.length) {
      navigate(`/question/${questionId + 1}`);
    } else {
      console.log("제출 데이터:", newSurveyData);
      // axios.post('https://your-api-endpoint.com/submit', newSurveyData)
      //   .then(response => {
      //     console.log("성공:", response.data);
      //     navigate("/submit-success");
      //   })
      //   .catch(error => {
      //     console.error("에러:", error);
      //   });
    }
  };

  const handleBack = () => {
    if (questionId > 1) {
      navigate(`/question/${questionId - 1}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="p-6 mt-20">
      <button
        onClick={handleBack}
        className="flex items-center mb-4 text-blue-500"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
        뒤로가기
      </button>
      <h1 className="text-xl font-bold  whitespace-pre-line mb-2">
        {currentQuestion.text}
      </h1>
      <div className="pb-2">
        {showAlert && <RefuseAlert message="모든 필수 항목을 입력해 주세요." />}
      </div>
      {questionId === 2 && (
        <div className="App mb-4">
          <TagSelector
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
      )}
      {currentQuestion.placeholders.map((placeholder, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            {!currentQuestion.required[index] && (
              <div className="mb-2">
                <Toggle
                  label=""
                  enabled={toggles[index]}
                  setEnabled={(value) => handleToggleChange(index, value)}
                />
              </div>
            )}
            <label className="block text-lg mb-2 ml-2">
              {currentQuestion.titles[index]}
            </label>
          </div>
          {toggles[index] && (
            <textarea
              value={answers[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={placeholder}
              className={`w-full p-3 text-base rounded-md border border-gray-300 bg-gray-600 text-white resize-none ${
                currentQuestion.required[index] ? "h-40" : "h-14"
              }`}
              style={{ whiteSpace: "nowrap" }}
            />
          )}
        </div>
      ))}
      {currentQuestion.tips && (
        <div className="mb-4">
          <h2 className="text-lg mb-2 text-gray-500">
            {currentQuestion.tipsTitle.map((tipstitle, index) => (
              <h2 key={index}>{tipstitle}</h2>
            ))}
          </h2>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            {currentQuestion.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
      {currentQuestion.example && (
        <div className="mb-4">
          <button
            onClick={() => setShowExample(!showExample)}
            className="flex items-center text-blue-500"
          >
            {showExample ? (
              <ChevronDownIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            )}
            예시 펼치기
          </button>
          {showExample && (
            <div className="mt-2 p-2 border border-gray-300 rounded bg-gray-100 text-gray-600 text-sm leading-loose whitespace-pre-line">
              <p>{currentQuestion.example}</p>
            </div>
          )}
        </div>
      )}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleNext}
          className="mt-6 py-2 px-4 text-lg text-white bg-blue-500 rounded-md"
        >
          {questionId < questions.length ? "다음 질문 계속" : "제출"}
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
