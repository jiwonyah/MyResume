import React from 'react';
import '../index.css';
import report1 from "/src/assets/Spam_Email_Detection_Report.pdf";
import report2 from "/src/assets/Spam_Email_Detection_Report_Summary.pdf";

const SpamEmailDetection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
        <header className="mb-8">
            {/* <img src={maizegazeLogo} alt="MaizeGaze Logo" className="w-16 h-16 mb-4" /> */}
            <h1 className="text-4xl font-bold">Project: Spam Email Detection</h1>
        </header>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📌 프로젝트 간략 설명</h2>
            <p className="pl-8">해당 팀 프로젝트는 2024.07 ~ 2024.08의 2개월동안 진행되었습니다.</p>
            <div className="ml-7 mr-7 bg-gray-200 p-7 rounded-lg mt-4">
                <p>
                👉 이메일 스팸 탐지 모델 개발을 목표로 하여, 이메일 헤더와 본문에서 중요한 특징들을 추출하고 분석하는 작업을 수행했습니다. 자연어 처리 기법인 TF-IDF를 사용하여 이메일 텍스트의 중요한 단어를 수치화하고, 이를 바탕으로 스팸 탐지에 유효한 패턴을 도출했습니다.
                 Logistic Regression, Random Forest, Dense Neural Network를 활용한 세 가지 모델을 비교 및 최적화하여 탐지 성능을 극대화하였으며, 각 모델의 성능은 혼동 행렬, ROC-AUC 점수 등을 사용하여 평가하였습니다.
                  또한, CAN-SPAM 법률에 따른 이메일 구조를 모델에 반영하여 정확도를 높였습니다.
                   이 프로젝트는 머신러닝을 활용한 이메일 스팸 탐지에서 기술적, 법적 측면을 모두 고려한 통합적인 접근 방식을 취했습니다.
                </p>
            </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🏆 주요 기여</h2>
            <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3">
                <span>✔️ </span><span className="bg-blue-100 px-1">뀨</span>
                </h4>
                <ul className="list-disc pl-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/2">
                            <li className="list-none mb-3">뀨</li>
                            <li className="list-none mb-3">뀨 </li>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3">
                <span>✔️ </span><span className="bg-blue-100 px-1">뀨</span>
                </h4>
                <ul className="list-disc pl-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/2">
                            <li className="list-none mb-3">뀨</li>
                            <li className="list-none mb-3">뀨</li>
                            <li className="list-none mb-3">뀨</li>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="mb-4">

                
            </div>
            
        </section>

        <hr className="my-8" />

        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-8">👀 추가 정보</h2>
            <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <li className="text-center">
                    <a href="https://colab.research.google.com/drive/1vE-vgN992LJbrw_jQD_lC4MCdjmah-ph?usp=drive_link" 
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center">
                        소스 코드
                    </a>
                </li>
                <li className="text-center">
                    <a href={report1} 
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center sm:col-span-2 md:col-span-1">
                        프로젝트 레포트 1
                    </a>
                </li>
                <li className="text-center">
                    <a href={report2}
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center sm:col-span-2 md:col-span-1">
                        프로젝트 레포트 2
                    </a>
                </li>
            </div>
        </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
  );
};

export default SpamEmailDetection;