import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedCard from '../components/animations/AnimatedCard';
import { heroTitle, heroDescription, fadeInUp } from '../config/animations';

const AboutPage = () => {
  useScrollToTop();
  const { pageBackground, textPrimary, textSecondary, accent, card, cardHover } = useThemeStyles();

  return (
    <div className={`min-h-screen ${pageBackground} ${textPrimary} p-8`}>
      <AnimatedSection variants={heroTitle}>
        <h1 className={`text-4xl font-bold ${accent} mb-4`}>About Me</h1>
      </AnimatedSection>

      <AnimatedSection variants={heroDescription} delay={0.2}>
        <p className={`text-xl text-purple-400 mb-8`}>
          Passionate Developer, Creative Problem Solver, Technology Enthusiast
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        <AnimatedCard className={`${card} ${cardHover} rounded-lg p-6 mb-8`} delay={0.4}>
          <h2 className={`text-2xl font-bold ${textPrimary} mb-4`}>Elvi Zekaj</h2>
          <p className={`${accent} mb-2`}>Full-Stack Developer</p>
          <p className={textSecondary}>📍 Based in Digital Innovation</p>
        </AnimatedCard>

        <AnimatedCard className={`${card} ${cardHover} rounded-lg p-6`} delay={0.6}>
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
        </AnimatedCard>
      </div>
    </div>
  );
};

export default AboutPage;
