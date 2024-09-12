import React from 'react';
import { Link } from 'react-router-dom';
import { TbArrowBigUpLines } from "react-icons/tb";
import sprout from "/src/assets/sprout6_27.png";
import clip from "/src/assets/Rectangle 513_225.png";
import person from "/src/assets/User13_230.png";
import email from "/src/assets/Message13_235.png";
import phone from "/src/assets/Phone13_240.png";
import graduate from "/src/assets/Mortarboard13_246.png";
import github from "/src/assets/github18_123.png";
import velog from "/src/assets/velog18_140.png";
import html from "/src/assets/html_css_js29_134.png";
import react from "/src/assets/react29_132.png";
import vite from "/src/assets/vite29_131.png";
import tailewind from "/src/assets/tailwind29_133.png";
import python from "/src/assets/python29_142.png";
import flask from "/src/assets/flask29_140.png";
import mysql from "/src/assets/mysql29_139.png";
import sqlite from "/src/assets/sqlite29_145.png";
import git from "/src/assets/git31_115.png";
import githubIcon from "/src/assets/github31_119.png";
import jira from "/src/assets/jira33_132.png";
import figma from "/src/assets/figma33_133.png";
import taiga from "/src/assets/taiga31_122.png";
import netlify from "/src/assets/netlify31_128.png";
import docker from "/src/assets/docker33_136.png";
import pin from "/src/assets/pin39_371.png";
import note from "/src/assets/note37_277.png";
import checkmark from "/src/assets/Done_round_fill39_361.png";

const LandingPage = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="relative w-full h-[440px] bg-[#fffdfd]">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-4">JIWON MOON</h1>
          <div className="w-48 sm:w-64 lg:w-96 h-2 bg-[#ffa100] mx-auto mb-4"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">Junior Developer</h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-black">Full-Stack</p>
        </div>
        <img className="absolute right-4 sm:right-24 bottom-0 w-24 sm:w-36 lg:w-[146px]" src={sprout} alt="Sprout" />
      </header>

      {/* About Me Section */}
      <section className="bg-[#887257] p-8 sm:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="relative bg-white rounded-3xl p-5 w-full lg:w-[600px]">
            <img className="absolute top-[-64px] left-1/2 transform -translate-x-1/2 lg:left-20 lg:transform-none w-24 sm:w-[103px]" src={clip} alt="Profile" />
            <h2 className="text-4xl font-black mb-4 text-center mt-16 sm:mt-8">ABOUT ME</h2>
            <div className="mt-5 mx-4 sm:mx-7">
              {[
                { icon: person, text: "Jiwon Moon" },
                { icon: email, text: "jiwoncode0502@gmail.com" },
                { icon: phone, text: "+65) 8280 - 2720" },
                { icon: graduate, text: "University of Wollongong (Bachelor of Computer Science)" },
              ].map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img className="w-8 sm:w-12 mr-4" src={item.icon} alt={`Icon ${index + 1}`} />
                  <p className="text-base sm:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-[400px] mt-8 lg:mt-32">
            <p className="text-xl sm:text-xl font-normal text-white">I am <strong>Jiwon Moon</strong>, a developer focused on implementing user-friendly features and interfaces.</p>
            <p className="text-xl sm:text-xl font-normal text-white mt-4">I prioritize closely analyzing the characteristics of target users and catering to their needs.</p>
          </div>
        </div>
      </section>

      {/* Archiving Section */}
      <section className="bg-black p-8 sm:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 sm:mb-12 text-center">ARCHIVING</h1>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {[
              {
                title: "What are in here?",
                displayLink: "github.com/jiwonyah",
                actualLink: "https://github.com/jiwonyah",
                description: [
                  "Personal and team projects",
                  "Undergraduate assignments",
                  "Self-taught coding"
                ],
                image: github,
              },
              {
                title: "What are in here?",
                actualLink: "https://velog.io/@ansdnjs00/posts",
                displayLink: "velog.io/@ansdnjs00/posts",
                description: [
                  "Studying beyond basic coding",
                  "Sharing information with others",
                  "Summarizing undergraduate assignments"
                ],
                image: velog,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8 w-full lg:w-[600px]">
                <img className="mb-4 w-48 sm:w-64" src={item.image} alt={`Platform ${index + 1}`} />
                <a href={item.actualLink} className="text-lg sm:text-xl text-[#0066b0] underline block mb-6 mx-4 sm:mx-5">{item.displayLink}</a>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 mx-4 sm:mx-5">{item.title}</h3>
                <ul className="list-disc pl-8">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-lg sm:text-lg mb-2 mx-2 sm:mx-3">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#ffc800] p-8 sm:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-8 sm:mb-12 text-center">SKILLS</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Front-end", images: [html, react, vite, tailewind] },
              { title: "Back-end", images: [python, flask, mysql, sqlite] },
              { title: "Version Control", images: [git, githubIcon] },
              { title: "Communication", images: [jira, figma, taiga] },
              { title: "Deployment", images: [netlify] },
              { title: "Container", images: [docker] },
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#e86800] text-center mb-4">{skill.title}</h3>
                <div className="border-t-4 border-[#bf4300] my-4"></div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {skill.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} alt={`${skill.title} skill ${imgIndex + 1}`} className="max-w-[80px] sm:max-w-[100px] lg:max-w-[130px] max-h-[80px] sm:max-h-[100px] lg:max-h-[130px] object-contain" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white p-8 sm:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="relative flex items-center">
            <img
              className="absolute right-full mr-2 w-12 sm:w-16 lg:w-20"
              src={pin}
              alt="Pin"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">
              PROJECTS
            </h1>
          </div>
        </div>
          <div className="bg-cover bg-center rounded-3xl p-6 sm:p-8" style={{backgroundImage: `url(${note})`}}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10">Overview</h2>
            <div className="flex flex-col gap-6 sm:gap-10">
              {[
                { title: "MyResume", description: "Static website for introducing my portfolio", link:'/project/myresume' },
                { title: "MaizeGaze", description: "Count & Detect Maize Tassels", link: "/project/maizegaze" },
              ].map((project, index) => (
                <div key={index} className="flex items-start">
                  <img className="w-10 sm:w-12 lg:w-[53px] mr-4 sm:mr-6 ml-0 sm:ml-16 lg:ml-[150px]" src={checkmark} alt="Checkmark" />
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium underline mb-2 sm:mb-4">{project.title}</h3>
                    <p className="text-lg sm:text-xl font-medium text-[#4a5568] mb-2">{project.description}</p>
                    <Link 
                      to={project.link} 
                      className="text-lg sm:text-xl font-medium text-[#4a5568] no-underline inline-block transition-all duration-300 ease-in-out hover:text-[#2b6cb0] hover:translate-x-1"
                    >
                      ➡️ View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-base sm:text-lg">프로젝트는 최신순으로 나열됩니다.</p>
          </div>
        </div>
      </section>

      {/* Footer with Scroll to Top */}
      <footer className="bg-white border-t-2 border-[#e2e8f0] py-12 sm:py-16 text-center">
        <button 
          className="p-3 sm:p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <TbArrowBigUpLines className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;