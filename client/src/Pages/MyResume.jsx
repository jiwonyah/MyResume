import React from 'react';
import '../index.css';
import 뀨 from "/src/assets/myresume.png";

const MyResume = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
        <header className="mb-8">
            {/* <img src={maizegazeLogo} alt="MaizeGaze Logo" className="w-16 h-16 mb-4" /> */}
            <h1 className="text-4xl font-bold">Project: MyResume</h1>
        </header>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📌 프로젝트 간략 설명</h2>
            <p className="pl-8">약 <strong>일주일</strong> 간의 짧은 기간 내에 제작된 개인 프로젝트입니다.</p>
            <div className="ml-7 mr-7 bg-gray-200 p-7 rounded-lg mt-4">
                <p>
                👉 취업 준비 과정에서 포트폴리오 내용을 정리하고 공유하기 위해 제작한 정적 웹사이트입니다.
                정적 웹사이트 배포에 특화된 <strong>Netlify</strong>를 통해 CI/CD를 수행하였으며, 이를 통해 지속적인 업데이트와 자동 배포의 편리함을 경험했습니다.
                또한, 프로젝트를 진행하며 React의 컴포넌트 구조와 상태 관리에 대한 이해를 더욱 심화시켰습니다.
                이 웹사이트는 향후 추가 프로젝트와 이력 사항을 지속적으로 업데이트할 수 있도록 설계되었습니다.
                </p>
            </div>
        </section>

        <div className="ml-7 mr-7 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <section>
                <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold mr-2">📚</h2>
                    <h2 className="text-2xl font-semibold">스택</h2>
                </div>
                <ul className="list-disc pl-5">
                    <li><strong>Frontend</strong>: HTML, CSS, JavaScript, Vite, Tailwind CSS, ReactJS</li>
                    <li><strong>Deployment</strong>: Netlify</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    <span className="highlight-pink">Figma 경험</span>
                </h2>
                <ul className="list-disc pl-5">
                    <li>프로토타입을 Figma로 제작했습니다.</li>
                    <li>빠르게 제작된 프로토타입을 기반으로 짧은 기간 내에 배포까지 할 수 있었습니다.</li>
                    <li>                   
                        <a href="https://www.figma.com/design/cIbxKUSmKkj3bSeXv9tQfi/Web-Portfolio?t=wSQgFoTHHIfpcnIn-0" 
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center">
                        Figma 프로토타입 보기
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        <hr className="my-8" />

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🏆 개선점</h2>
            <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3">
                <span>✔️ </span><span className="bg-blue-100 px-1">모바일 인터페이스 최적화</span>
                </h4>
                <ul className="list-disc pl-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/2">
                            <li className="list-none mb-3">기존 모바일에서 사이트에 접근하면 화면이 구렸음. 이미지 요소들이 겹치거나 내용이 잘림</li>
                            <li className="list-none mb-3">~를 통해 개선함. </li>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3">
                <span>✔️ </span><span className="bg-blue-100 px-1">위로 스크롤</span>
                </h4>
                <ul className="list-disc pl-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/2">
                            <li className="list-none mb-3">현재 페이지의 스크롤 위치에 따라 다른 페이지로 링크될 때 스크롤 위치가 달라짐.</li>
                            <li className="list-none mb-3">다른 페이지로 링크될때 스크롤이 자동으로 맨위로 이동되도록함.</li>
                            <li className="list-none mb-3">이를 통해 유저 경험 개선</li>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="mb-4">

                
            </div>
            
        </section>

        <hr className="my-8" />

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">💥 트러블 슈팅</h2>
            <ol className="list-decimal pl-8">
                
                <li className="mb-4">
                    <h3 className="text-lg font-semibold">
                    <span className="bg-yellow-100 px-1">배포 과정에서 발생한 에러 정리</span>
                    </h3>
                    <p></p>
                </li>
            </ol>
        </section>

        <hr className="my-8" />

        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-8">👀 추가 정보</h2>
            <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="text-center">
                    <a href="https://github.com/jiwonyah/MyResume" 
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center">
                        GitHub 오픈소스
                    </a>
                </li>
                <li className="text-center">
                    <a href="https://jiwon-resume.netlify.app/" 
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center sm:col-span-2 md:col-span-1">
                        배포 링크
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

export default MyResume;