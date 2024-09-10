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
<div className="max-w-5xl mx-auto mt-20">
    <div style={{ margin: '0 auto', backgroundColor: 'white' }}>
      {/* Header Section */}
      <header style={{ position: 'relative', width: '100%', height: '440px', backgroundColor: '#fffdfd' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '64px', fontWeight: 800, color: 'black', marginBottom: '16px' }}>JIWON MOON</h1>
          <div style={{ width: '384px', height: '8px', backgroundColor: '#ffa100', margin: '0 auto 16px' }}></div>
          <h2 style={{ fontSize: '43px', fontWeight: 700, color: 'black', marginBottom: '8px' }}>Junior Developer</h2>
          <p style={{ fontSize: '36px', color: 'black' }}>Full-Stack</p>
        </div>
        <img style={{ position: 'absolute', right: '96px', bottom: '0' }} width="146" height="136" src={sprout} alt="Sprout" />
      </header>

      {/* About Me Section */}
      <section style={{ backgroundColor: '#887257', padding: '64px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px' }}>
          
          {/* About Me Section - Increased Width */}
          <div style={{ position: 'relative', backgroundColor: 'white', borderRadius: '24px', padding: '20px', width: '600px' }}>
            <img style={{ position: 'absolute', top: '-64px', left: '80px' }} width="103" height="122" src={clip} alt="Profile" />
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '20px', textAlign: 'center', marginTop: '20px' }}>ABOUT ME</h2>
            <div style={{ marginTop: '20px', marginLeft: '28px', marginRight: '28px', marginBottom: '20px' }}>
              {[
                { icon: person, text: "Jiwon Moon" },
                { icon: email, text: "jiwoncode0502@gmail.com" },
                { icon: phone, text: "+65) 8280 - 2720" },
                { icon: graduate, text: "University of Wollongong (Bachelor of Computer Science)" },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <img width="45" src={item.icon} alt={`Icon ${index + 1}`} style={{ marginRight: '16px' }} />
                  <p style={{ fontSize: '20px' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Introduction Section - Decreased Width */}
          <div style={{ width: '400px' }}>
            <br></br><br></br><br></br><br></br>
            {/* <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'white' }}>Introduction</h2> */}
            <p style={{ fontSize: '22px', fontWeight: 350, color: 'white' }}>I am <strong>Jiwon Moon</strong>, a developer focused on implementing user-friendly features and interfaces.</p>
            <p style={{ fontSize: '22px', fontWeight: 350, color: 'white' }}>I prioritize closely analyzing the characteristics of target users and catering to their needs.</p>
          </div>

        </div>
      </section>


      {/* Archiving Section */}
      <section style={{ backgroundColor: 'black', padding: '50px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: 'white', marginBottom: '40px', textAlign: 'center' }}>ARCHIVING</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px' }}>
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
              <div key={index} style={{ backgroundColor: 'white', borderRadius: '24px', padding: '32px', width: '600px' }}>
                <img style={{ marginBottom: '16px' }} width="250" height="59" src={item.image} alt={`Platform ${index + 1}`} />
                <a href={item.actualLink} style={{ fontSize: '20px', color: '#0066b0', textDecoration: 'underline', display: 'block', marginBottom: '24px', marginLeft: '20px', marginRight: '20px' }}>{item.displayLink}</a>
                <h3 style={{ fontSize: '30px', fontWeight: 900, marginBottom: '16px', marginLeft: '20px', marginRight: '20px' }}>{item.title}</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  {item.description.map((desc, i) => (
                    <li key={i} style={{ fontSize: '20px', marginBottom: '8px', marginLeft: '24px', marginRight: '24px' }}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ backgroundColor: '#ffc800', padding: '50px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: 'black', marginBottom: '40px', textAlign: 'center' }}>SKILLS</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {[
              { title: "Front-end", images: [html, react, vite, tailewind] },
              { title: "Back-end", images: [python, flask, mysql, sqlite] },
              { title: "Version Control", images: [git, githubIcon] },
              { title: "Communication", images: [jira, figma, taiga] },
              { title: "Deployment", images: [netlify] },
              { title: "Container", images: [docker] },
            ].map((skill, index) => (
              <div key={index} style={{ backgroundColor: 'white', borderRadius: '24px', padding: '32px' }}>
                <h3 style={{ fontSize: '30px', fontWeight: 800, color: '#e86800', textAlign: 'center', marginBottom: '16px' }}>{skill.title}</h3>
                <div style={{ borderTop: '4px solid #bf4300', margin: '16px 0' }}></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                  {skill.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} alt={`${skill.title} skill ${imgIndex + 1}`} style={{ maxWidth: '130px', maxHeight: '130px', objectFit: 'contain' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ backgroundColor: 'white', padding: '64px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ position: 'relative', marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              style={{ position: 'absolute', left: '250px', marginTop:'83px', transform: 'translateY(-50%)' }}
              width="80"
              src={pin}
              alt="Pin"
            />
            <h1 style={{ fontSize: '48px', fontWeight: 800, color: 'black', textAlign: 'center' }}>PROJECTS</h1>
          </div>
          <div style={{ backgroundImage: note, backgroundSize: 'cover',
             backgroundPosition: 'center', borderRadius: '24px', padding: '40px'}}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', marginBottom: '20px' }}>Overview</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: "MyPortfolio", description: "Static website for introducing my portfolio", link:'/' },
                { title: "MaizeGaze", description: "Count & Detect Maize Tassels", link: "/project/maizegaze" },
                // { title: "LinkMingle", description: "App for simply sharing Biz Card" },
              ].map((project, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <img width="53" height="53" src={checkmark} alt="Checkmark" style={{ marginLeft: '150px', marginRight:'15px' }} />
                  <div>
                    <h3 style={{ fontSize: '30px', fontWeight: 500, textDecoration: 'underline', marginBottom: '8px' }}>{project.title}</h3>
                    <p style={{ fontSize: '20px', fontWeight: 500, color: '#4a5568'}}>{project.description}</p>
                    <Link 
                      to={project.link} 
                      style={{ 
                        fontSize: '20px', 
                        fontWeight: 500, 
                        color: '#4a5568', 
                        textDecoration: 'none',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2b6cb0';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#4a5568';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      ➡️ View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br></br>
          <div style={{textAlign: 'center'}}>
            <p>프로젝트는 최신순으로 나열됩니다.</p>
          </div>
          
        </div>
      </section>


      {/* Footer with Scroll to Top */}
      <footer style={{ backgroundColor: 'white', borderTop: '2px solid #e2e8f0', padding: '64px 0', textAlign: 'center' }}>
        <button 
          style={{ 
            padding: '10px 20px'
          }} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <TbArrowBigUpLines />
        </button>
      </footer>
    </div>
    </div>
  );
};

export default LandingPage;