import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative w-full h-[478px] bg-[#fffdfd]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl font-extrabold text-black mb-4">JIWON MOON</h1>
          <div className="w-96 h-2 bg-[#ffa100] mx-auto mb-4"></div>
          <h2 className="text-5xl font-bold text-black mb-2">Junior Developer</h2>
          <p className="text-4xl text-black">Full-Stack</p>
        </div>
        <img className="absolute right-24 bottom-0" width="146" height="136" src="/src/assets/sprout6_27.png" alt="Sprout" />
        <img className="absolute left-9 top-9" width="67" height="59" src="/src/assets/menu7_71.png" alt="Menu" />
        <img className="absolute right-9 top-7" width="59" height="59" src="/src/assets/Download7_56.png" alt="Download" />
      </header>

      {/* About Me Section */}
      <section className="bg-[#887257] py-16 px-8">
        <div className="container mx-auto flex justify-between items-start">
          <div className="relative bg-white rounded-3xl p-8 w-[600px]">
            <img className="absolute -top-16 left-20" width="103" height="122" src="/src/assets/Rectangle 513_225.png" alt="Profile" />
            <img className="absolute top-6 left-6" width="50" height="50" src="/src/assets/paperclip_icon.png" alt="Paperclip" />
            <h2 className="text-5xl font-black mb-8 text-center mt-10">ABOUT ME</h2>
            <div className="space-y-4 mt-8">
              {[
                { icon: "/src/assets/User13_230.png", text: "Jiwon Moon" },
                { icon: "/src/assets/Message13_235.png", text: "jiwoncode0502@gmail.com" },
                { icon: "/src/assets/Phone13_240.png", text: "+65) 8280 - 2720" },
                { icon: "/src/assets/Mortarboard13_246.png", text: "University of Wollongong\n(Bachelor of Computer Science)" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <img width="30" height="30" src={item.icon} alt={`Icon ${index + 1}`} className="mr-4" />
                  <p className="text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-8xl font-bold text-white">Introduction</h2>
        </div>
      </section>

      {/* Archiving Section */}
      <section className="bg-black py-16 px-8">
        <div className="container mx-auto">
          <img className="mb-12" width="1281" height="112" src="/src/assets/ARCHIVING13_285.png" alt="Archiving" />
          <div className="flex justify-between">
            {[
              {
                title: "What are in here?",
                link: "https://github.com/jiwonyah",
                description: "Personal and team projects\nUndergraduate assignments\nSelf-taught coding",
                image: "/src/assets/github18_123.png",
              },
              {
                title: "What are in here?",
                link: "https://velog.io/@ansdnjs00/posts",
                description: "Studying beyond basic coding\nSharing information with others\nSummarizing undergraduate assignments",
                image: "/src/assets/velog18_140.png",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 w-[600px]">
                <img className="mb-4" width="298" height="70" src={item.image} alt={`Platform ${index + 1}`} />
                <a href={item.link} className="text-3xl text-[#0066b0] underline block mb-4">{item.link}</a>
                <h3 className="text-4xl font-black mb-4">{item.title}</h3>
                <p className="text-3xl whitespace-pre-line">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#ffc800] py-16 px-8">
        <div className="container mx-auto">
          <img className="mb-12" width="1281" height="112" src="/src/assets/Skills13_327.png" alt="Skills" />
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: "Front-end", images: ["/src/assets/html_css_js29_134.png", "/src/assets/react29_132.png", "/src/assets/vite29_131.png", "/src/assets/tailwind29_133.png"] },
              { title: "Back-end", images: ["/src/assets/python29_142.png", "/src/assets/flask29_140.png", "/src/assets/mysql29_139.png", "/src/assets/sqlite29_145.png"] },
              { title: "Version Control", images: ["/src/assets/git31_115.png", "/src/assets/github31_119.png"] },
              { title: "Communication", images: ["/src/assets/jira33_132.png", "/src/assets/figma33_133.png", "/src/assets/taiga31_122.png"] },
              { title: "Deployment", images: ["/src/assets/netlify31_128.png"] },
              { title: "Container", images: ["/src/assets/docker33_136.png"] },
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-3xl p-8">
                <h3 className="text-6xl font-black text-[#e86800] text-center mb-4">{skill.title}</h3>
                <div className="border-t-4 border-[#bf4300] my-4"></div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {skill.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} alt={`${skill.title} skill ${imgIndex + 1}`} className="max-w-[200px] max-h-[200px] object-contain" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16 px-8">
        <div className="container mx-auto">
          <div className="relative mb-12">
            <img width="1281" height="112" src="/src/assets/Projects33_275.png" alt="Projects" />
            <img className="absolute -top-3 left-72" width="133" height="135" src="/src/assets/pin39_371.png" alt="Pin" />
          </div>
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h2 className="text-6xl font-black text-center mb-12">Overview</h2>
            <div className="space-y-12">
              {[
                { title: "MaizeGaze", description: "Count & Detect Maize Tassels" },
                { title: "MyPortfolio", description: "Static website for introducing\nmy portfolio" },
                { title: "LinkMingle", description: "App for simply sharing Biz Card" },
              ].map((project, index) => (
                <div key={index} className="flex items-start">
                  <img width="62" height="62" src={`/src/assets/Done_round_fill39_${326 + index * 41}.png`} alt="Checkmark" className="mr-4" />
                  <div>
                    <h3 className="text-5xl font-medium underline mb-2">{project.title}</h3>
                    <p className="text-4xl font-light text-gray-700 whitespace-pre-line">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-white border-t-2 border-gray-200 py-16">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default LandingPage;