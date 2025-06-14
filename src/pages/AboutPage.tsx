import useScrollToTop from '../hooks/useScrollToTop';

const AboutPage = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h1>
      <p className="text-xl text-purple-400 mb-8">
        Passionate Developer, Creative Problem Solver, Technology Enthusiast
      </p>


      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Elvi Zekaj</h2>
          <p className="text-cyan-400 mb-2">Full-Stack Developer</p>
          <p className="text-slate-300">📍 Based in Digital Innovation</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-slate-300 mb-4">
            With over 5 years of experience in full-stack development, I've dedicated my career
            to creating exceptional digital experiences that bridge the gap between innovative
            technology and user-centered design.
          </p>
          <p className="text-slate-300">
            My passion lies in transforming complex problems into elegant, scalable solutions
            using modern technologies like React, Node.js, TypeScript, and cloud platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
