import React from 'react';
import '../index.css';
import maizegazeLogo from "/src/assets/logo.png";

const MaizeGaze = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
        <header className="mb-8">
            <img src={maizegazeLogo} alt="MaizeGaze Logo" className="w-16 h-16 mb-4" />
            <h1 className="text-4xl font-bold">Project: MaizeGaze</h1>
        </header>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📌 프로젝트 간략 설명</h2>
            <p className="pl-8">해당 팀 프로젝트는 2024.03 ~ 2024.09의 6개월동안 진행되었습니다.</p>
            <div className="ml-7 mr-7 bg-gray-200 p-7 rounded-lg mt-4">
                <p>
                👉 <strong><a href="https://www.maizegaze.com/" className="text-blue-600 hover:underline">MaizeGaze</a></strong>는
                    옥수수를 의미하는 <strong>Maize</strong>와 응시한다는 뜻의 <strong>Gaze</strong>를 결합한 이름입니다.
                    이 시스템은 <strong>신경망 모델</strong>을 활용하여 사용자가 제공한 옥수수 밭 이미지에서 옥수수 술(tassel)을
                    자동으로 분석하고, 그 결과를 주석 처리된(annotation) 이미지로 반환합니다. 또한, 기계 사용에 익숙하지 않을 수 있는
                    타겟 유저층을 고려해 직관적이고 사용하기 쉬운 인터페이스와 기능에 중점을 두고 설계되었습니다.
                </p>
            </div>
        </section>

        <div className="ml-7 mr-7 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    <span className="highlight-blue">Jira를 활용한 스크럼(Scrum) 관리</span>
                </h2>
                <ul className="list-disc pl-5">
                    <li>각 스프린트는 약 2주로 설정되며, 미리 작성된 유저 스토리를 바탕으로 작업을 할당.</li>
                    <li>스프린트 시작과 종료 시 회의를 진행해 프로젝트가 원활하게 진행될 수 있도록 지원.</li>
                    <li>회의 내용은 Meeting Minute로 기록하여 팀원들과 공유.</li>
                </ul>
            </section>
            <section>
                <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold mr-2">📚</h2>
                    <h2 className="text-2xl font-semibold">스택</h2>
                </div>
                <ul className="list-disc pl-5">
                    <li><strong>Frontend</strong>: HTML, CSS, JavaScript, Vite, Tailwind CSS, ReactJS</li>
                    <li><strong>Backend</strong>: Flask, Redis, Celery</li>
                    <li><strong>Database</strong>: SQLite, SQL Alchemy</li>
                    <li><strong>Deployment</strong>: Nginx, Gunicorn, GCP, Docker</li>
                </ul>
            </section>
        </div>

        <hr className="my-8" />

        <section className="mb-8">
    `        <h2 className="text-2xl font-semibold mb-4">🏆 나의 기여</h2>
            <div className="flex items-center mb-3">
                <h2 className="text-lg font-semibold mr-2">1. </h2>
                <h2 className="text-lg font-semibold underline">코드 기여</h2>
            </div>
            <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3">
                <span>✔️ </span><span className="bg-blue-100 px-1">Reannotation 기능 개발 (Backend + Frontend)</span>
                </h4>
                <ul className="list-disc pl-8">
                    {/* 그리드 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/2">
                            <li className="list-none mb-3">
                                이미 주석화된 이미지의 주석(annotation/box label)을 수정할 수 있는 기능을 제공하는 <strong>재주석(Reannotation) 페이지</strong>입니다.
                            </li>
                            <li className="mb-3"><strong>기존 주석 상태 업데이트</strong>
                                <ul className="list-none">
                                    <li className="mb-1 before:content-['○'] before:mr-1 before:text-red-500 before:text-xs before:font-semibold"><code>useEffect</code> 훅을 통해 서버로부터 기존의 이미지와 주석(annotation) 데이터를 불러옵니다.</li>
                                    <li className="before:content-['○'] before:mr-1 before:text-red-500 before:text-xs before:font-semibold"><code>ReactPictureAnnotation</code> 컴포넌트를 사용하여 주석을 추가하거나 편집합니다.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>튜토리얼 제작</strong>
                                <p>사용 방법이 다소 직관적이지 않을 수 있다는 점을 고려하여 관련 튜토리얼 모달을 제작했습니다.</p>
                            </li>
                        </div>
                        <div className="md:w-1/2">
                            <video className="w-full rounded-lg shadow-lg" controls>
                            <source src="/src/assets/tutorial.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </ul>
                
                <br></br><br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                    <div>
                        <h4 className="text-lg font-semibold mb-3">
                        <span>✔️ </span><span className="bg-blue-100 px-1">사용자 프로필 페이지 제작 (Frontend)</span>
                        </h4>
                        <p className="ml-8">사용자가 사용 중인 저장 공간을 표시하고, <code>flowbite</code>의 <code>Progress</code> 바를 통해 시각적으로 저장소 사용량을 나타냅니다.</p>
                    </div>
                    <img src="/src/assets/image.png" alt="screenshot 1"/>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">
                        <span>✔️ </span><span className="bg-blue-100 px-1">피드백 관련 기능 및 페이지 제작 (Frontend + Backend)</span>
                    </h4>
                </div>
            </div>
            <br></br>

            <div className="flex items-center mb-4">
                <h2 className="text-lg font-semibold mr-2">2. </h2>
                <h2 className="text-lg font-semibold underline">그외 기여</h2>
            </div>
            <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">
                    <span>✔️ </span><span className="bg-blue-100 px-1">WSL을 통한 윈도우 개발 환경 구축</span>
                </h4>
                <p className="ml-8">초기 개발 환경이 Mac에서 세팅되었으나, Windows에서 개발을 진행하기 위해 WSL(Windows Subsystem for Linux)을
                    사용하여 동일한 환경을 구성하였습니다. 이를 통해 Mac과 Windows 간의 개발 환경 차이를 최소화하고, 원활한 협업이 가능하도록 하였습니다.</p>
                <br></br>
                <h4 className="text-lg font-semibold mb-3">
                    <span>✔️ </span><span className="bg-blue-100 px-1">프로젝트 총괄 보조</span>
                </h4>
                <ul className="list-disc pl-8">
                        <li>6개월의 프로젝트 기간동안 모든 회의 및 회고록을 작성했습니다.</li>
                        <li>매 스프린트의 마지막에 기능 테스트를 진행하고 오류가 난 부분의 코드 검수를 진행했습니다.</li>
                        <li>코드 통합 과정에서 발생하는 코드나 라이브러리의 버전 충돌 문제를 해결했습니다.</li>
                    </ul>
            </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">💥 트러블 슈팅</h2>
            <ol className="list-decimal pl-8">
                <li className="mb-4">
                    <h3 className="text-lg font-semibold">
                    <span className="bg-yellow-100 px-1">React 18에서 이미지 어노테이션 라이브러리 호환성 문제</span>
                    </h3>
                    <p>처음 reannotation 기능 구현을 위해 사용 시도했던 <strong>react-image-annotation</strong> 라이브러리가 프로젝트의 React 버전과 관련해서 peer dependency 오류를 발생시킴.</p>
                    <p className="underline"><strong>해결 방법</strong></p>
                    <p>React 18에서 <strong>react-image-annotation</strong>의 호환성 문제로 인해 <strong>react-picture-annotation</strong>으로 대체하여 문제를 해결함. 이로써 이미지 주석 기능이 안정적으로 작동하도록 프로젝트 환경을 조정할 수 있었음.</p>
                </li>
                {/* <li className="mb-4">
                    <h3 className="text-lg font-semibold">
                    <span className="bg-yellow-100 px-1">Celery 실행 에러</span>
                    </h3>
                </li> */}
                
                <li className="mb-4">
                    <h3 className="text-lg font-semibold">
                    <span className="bg-yellow-100 px-1">회원가입 시 인증 이메일 수신 불가능 문제</span>
                    </h3>
                    <p>Flask 애플리케이션에서 Outlook을 통해 이메일을 보내는 과정에서 SMTPHeloError가 발생.</p>
                    <p className="underline"><strong>원인</strong></p>
                    <p><code>SMTPHeloError: 501, b'5.5.4 Invalid domain name'</code> 오류는 시스템의 호스트 이름이 FQDN 형식이 아니기 때문에 발생한 문제였습니다.</p>
                    <p className="underline"><strong>해결 방법</strong></p>
                    <p>Linux 환경에서 <code>hostnamectl</code> 명령어를 사용하여 호스트 이름을 FQDN 형식으로 설정. SMTP 서버가 이를 올바르게 인식하여 이메일 전송이 정상적으로 이루어지게 함.</p>
                </li>
            </ol>
        </section>

        <hr className="my-8" />

        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-8">👀 추가 정보</h2>
            <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <li className="text-center">
                    <a href="https://csit321maizegaze.wordpress.com/" 
                    className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out">
                        프로젝트 소개 및 홍보 블로그
                    </a>
                </li>
                <li className="text-center">
                    <a href="https://github.com/edbertekaputera/MaizeGaze" 
                        className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300 ease-in-out text-center">
                        GitHub 오픈소스
                    </a>
                </li>
                <li className="text-center">
                    <a href="https://www.maizegaze.com/" 
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

export default MaizeGaze;