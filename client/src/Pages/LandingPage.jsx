import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div>
        <div>
            <div className="flex justify-center items-center bg-gradient-to-r">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Jiwon Moon</h1>
                    <p className="text-xl text-gray-600">Junior Developer</p>
                    <p> Full-Stack </p>
                </header>
            </div>

          <div>
            <section className="flex justify-center items-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">ABOUT ME</h2>
              {/* Add contact details here */}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Education</h2>
              <div>
                <h3 className="text-lg font-medium">Bachelor of University of Wollongong</h3>
                <p className="text-gray-600">2022-2024</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Projects</h2>
              <div>
                <h3 className="text-lg font-medium">MaizeGaze</h3>
                <p className="text-gray-600">바로가기</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Skills</h2>
              {/* Add skills here */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;