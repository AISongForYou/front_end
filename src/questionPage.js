import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import RefuseAlert from "./components/refuseAlert";
import TagSelector from "./components/tagSelector";

const questions = [
  {
    text: "당신의 비즈니스를 자유롭게 설명해주세요!",
    note: "구체적일 수록 더 멋진 가사를 만들 수 있어요.",
    placeholders: [
      "ex). 깨끗한 기름으로 하루 60마리만 튀겨 만드는 60계 치킨 건대입구점",
      "(선택)제품",
      "(선택)업종",
    ],
    required: [true, false, false],
    tipsTitle: ["가사 잘 쓰는 법"],
    tips: [
      "홍보하고자 하는 제품을 입력하면 좋아요.",
      "홍보하고자 하는 매장명을 입력하면 좋아요.",
      "꼭 필요한 내용만 간단히 입력해주세요.",
    ],
    example:
      "예시: 멋진 노래를 만들기 위한 구체적인 설명과 예시 문구를 적어주세요.\n예시 줄바꿈1\n예시 줄바꿈2",
  },
  {
    text: "광고음악으로 강조하고 싶은 내용을 입력해주세요.",
    note: "구체적일 수록 더 멋진 가사를 만들 수 있어요.",
    placeholders: ["예시문구 추가필요"],
    required: [true],
    tipsTitle: ["가사 잘 쓰는 법"],
    tips: [
      "홍보하고자 하는 제품을 입력하면 좋아요.",
      "홍보하고자 하는 매장명을 입력하면 좋아요.",
      "꼭 필요한 내용만 간단히 입력해주세요.",
    ],
    example: "제품명:",
  },
  {
    text: "원하는 광고음악의 스타일을 자유롭게 입력해주세요",
    note: "구체적일 수록 더 멋진 음악을 만들 수 있어요",
    placeholders: [
      "예시문구 추가필요",
      "(선택)광고 이미지 스타일",
      "(선택)광고문구",
    ],
    required: [true, false, false],
    tipsTitle: ["가사 잘 쓰는 법"],
    tips: [
      "홍보하고자 하는 제품을 입력하면 좋아요.",
      "홍보하고자 하는 매장명을 입력하면 좋아요.",
      "꼭 필요한 내용만 간단히 입력해주세요.",
    ],
    example: "제품명:",
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

  useEffect(() => {
    setAnswers(
      surveyData[questionId]?.answers ||
        currentQuestion.placeholders.map(() => "")
    );
    setShowAlert(false);
  }, [questionId, surveyData, currentQuestion.placeholders]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (
      currentQuestion.required.some(
        (isRequired, index) => isRequired && answers[index].trim() === ""
      )
    ) {
      setShowAlert(true);
      return;
    }

    const newSurveyData = {
      ...surveyData,
      [questionId]: { answers },
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
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleBack}
        className="flex items-center mb-4 text-blue-500"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" />
        뒤로가기
      </button>
      <h1 className="text-xl mb-2">{currentQuestion.text}</h1>
      {currentQuestion.note && (
        <p className="mb-4 text-gray-700">{currentQuestion.note}</p>
      )}
      <div className="App">
        <TagSelector />
      </div>
      <div className="pb-2">
        {showAlert && <RefuseAlert message="모든 필수 항목을 입력해 주세요." />}
      </div>
      {currentQuestion.placeholders.map((placeholder, index) => (
        <textarea
          value={answers[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={currentQuestion.placeholders[index]}
          className={`w-full p-3 text-lg rounded-md border border-gray-300 bg-gray-600 text-white resize-none mb-4 ${
            currentQuestion.required[index] ? "h-40" : "h-14"
          }`}
        />
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
            className="flex items-center text-blue-500 underline"
          >
            {showExample ? (
              <ChevronDownIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            )}
            예시 펼치기
          </button>
          {showExample && (
            <div className="mt-2 p-2 border border-gray-300 rounded bg-gray-100 text-gray-600 text-sm whitespace-pre-line">
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
