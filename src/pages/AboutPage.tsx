import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';

const AboutPage = () => {
  useScrollToTop();
  const { pageBackground, textPrimary, textSecondary, accent, card, cardHover } = useThemeStyles();

  return (
    <div className={`min-h-screen ${pageBackground} ${textPrimary} p-8`}>
      <h1 className={`text-4xl font-bold ${accent} mb-4`}>About Me</h1>
      <p className={`text-xl text-purple-400 mb-8`}>
        Passionate Developer, Creative Problem Solver, Technology Enthusiast
      </p>

      <div className="max-w-4xl mx-auto">
        <div className={`${card} ${cardHover} rounded-lg p-6 mb-8`}>
          <h2 className={`text-2xl font-bold ${textPrimary} mb-4`}>Elvi Zekaj</h2>
          <p className={`${accent} mb-2`}>Full-Stack Developer</p>
          <p className={textSecondary}>📍 Based in Digital Innovation</p>
        </div>

        <div className={`${card} ${cardHover} rounded-lg p-6`}>
          <h3 className={`text-xl font-bold ${textPrimary} mb-4`}>My Journey</h3>
          <p className={`${textSecondary} mb-4`}>
            With over 5 years of experience in full-stack development, I've dedicated my career
            to creating exceptional digital experiences that bridge the gap between innovative
            technology and user-centered design.
          </p>
          <p className={textSecondary}>
            My passion lies in transforming complex problems into elegant, scalable solutions
            using modern technologies like React, Node.js, TypeScript, and cloud platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
