import { Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggeredContainer, { StaggeredItem } from '../components/animations/StaggeredContainer';
import AnimatedCard from '../components/animations/AnimatedCard';
import AnimatedCounter from '../components/animations/AnimatedCounter';
import { heroTitle, heroSubtitle, heroDescription, heroImage, fadeIn, scaleIn } from '../config/animations';

// Import profile image
const profileImageUrl = '/assets/images/profile.png';

const WelcomePage = () => {
  useScrollToTop();
  const {
    pageBackground,
    textPrimary,
    textSecondary,
    accent,
    buttonPrimary,
    buttonSecondary,
    sectionBackground,
    card,
    cardHover,
    getSkillColors,
    progressBg,
    progressFill
  } = useThemeStyles();

  return (
    <div className={`min-h-screen ${pageBackground} ${textPrimary}`}>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <AnimatedSection variants={heroTitle}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className={accent}>Welcome to My</span><br />
                <span className="text-purple-400">Digital Universe</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={heroSubtitle}>
              <p className={`text-xl md:text-2xl mb-6 ${accent}`}>
                Where Innovation Meets Creativity
              </p>
            </AnimatedSection>

            <AnimatedSection variants={heroDescription}>
              <p className={`text-lg ${textSecondary} leading-relaxed mb-8 max-w-3xl mx-auto`}>
                I'm Elvi Zekaj, a passionate full-stack developer crafting exceptional digital experiences
                with cutting-edge technologies and modern design principles.
              </p>
            </AnimatedSection>

            {/* Tech Stack Preview */}
            <StaggeredContainer className="flex flex-wrap justify-center gap-3 mb-8" staggerDelay={0.1} childDelay={0.8}>
              <StaggeredItem>
                <span className={`px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-sm border ${getSkillColors('cyan').border}`}>React</span>
              </StaggeredItem>
              <StaggeredItem>
                <span className={`px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-sm border ${getSkillColors('purple').border}`}>TypeScript</span>
              </StaggeredItem>
              <StaggeredItem>
                <span className={`px-3 py-1 ${getSkillColors('green').bg} ${getSkillColors('green').text} rounded-full text-sm border ${getSkillColors('green').border}`}>Node.js</span>
              </StaggeredItem>
              <StaggeredItem>
                <span className={`px-3 py-1 ${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} rounded-full text-sm border ${getSkillColors('yellow').border}`}>Python</span>
              </StaggeredItem>
              <StaggeredItem>
                <span className={`px-3 py-1 ${getSkillColors('blue').bg} ${getSkillColors('blue').text} rounded-full text-sm border ${getSkillColors('blue').border}`}>AWS</span>
              </StaggeredItem>
              <StaggeredItem>
                <span className={`px-3 py-1 ${getSkillColors('indigo').bg} ${getSkillColors('indigo').text} rounded-full text-sm border ${getSkillColors('indigo').border}`}>Docker</span>
              </StaggeredItem>
            </StaggeredContainer>

            {/* CTA Buttons */}
            <StaggeredContainer className="flex flex-col sm:flex-row gap-4 justify-center" staggerDelay={0.2} childDelay={1.2}>
              <StaggeredItem>
                <Link to="/about" className={`px-8 py-3 ${buttonPrimary} rounded-lg font-semibold hover:scale-105 transition-transform`}>
                  Discover My Story
                </Link>
              </StaggeredItem>
              <StaggeredItem>
                <Link to="/projects" className={`px-8 py-3 ${buttonSecondary} rounded-lg font-semibold transition-colors`}>
                  View My Work
                </Link>
              </StaggeredItem>
            </StaggeredContainer>
          </div>

          {/* Hero Visual */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              {/* Profile Image with Fallback */}
              <AnimatedSection variants={heroImage}>
                <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full border-4 ${accent.replace('text-', 'border-')}/30 shadow-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden`}>
                  {/* Fallback Content - Always Visible */}
                  <div className={`w-full h-full flex items-center justify-center ${accent}`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <div className="text-lg font-semibold">Elvi Zekaj</div>
                      <div className="text-sm opacity-75">Full Stack Developer</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Actual Image - Hidden by default, shown when loaded */}
              <img
                src={profileImageUrl}
                alt="Elvi Zekaj - Full Stack Developer"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                onLoad={(e) => {
                  console.log('Profile image loaded successfully');
                  e.currentTarget.style.opacity = '1';
                }}
                onError={(e) => {
                  console.error('Failed to load profile image - using fallback');
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Tech icons floating around */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${getSkillColors('cyan').bg} rounded-full flex items-center justify-center animate-bounce`}>
                <span className={`${getSkillColors('cyan').text} text-xl`}>⚛️</span>
              </div>
              <div className={`absolute -bottom-4 -left-4 w-12 h-12 ${getSkillColors('purple').bg} rounded-full flex items-center justify-center animate-bounce`}>
                <span className={`${getSkillColors('purple').text} text-xl`}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className={`py-20 px-6 ${sectionBackground}`}>
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className={`text-4xl font-bold text-center mb-16 ${accent}`}>
              Explore My Portfolio
            </h2>
          </AnimatedSection>
          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
            <StaggeredItem>
              <Link to="/about" className={`group ${card} ${cardHover} p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-500/50`}>
                <div className={`text-4xl mb-4 ${getSkillColors('cyan').text}`}>👨‍💻</div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary} group-hover:${getSkillColors('cyan').text} transition-colors`}>About Me</h3>
                <p className={`${textSecondary} leading-relaxed`}>Learn about my journey, skills, and passion for technology</p>
                <div className={`mt-4 flex items-center ${getSkillColors('cyan').text} text-sm font-medium`}>
                  <span>Learn more</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </StaggeredItem>

            <StaggeredItem>
              <Link to="/projects" className={`group ${card} ${cardHover} p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-purple-500/50`}>
                <div className={`text-4xl mb-4 ${getSkillColors('purple').text}`}>🚀</div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary} group-hover:${getSkillColors('purple').text} transition-colors`}>Projects</h3>
                <p className={`${textSecondary} leading-relaxed`}>Explore my latest work and innovative solutions</p>
                <div className={`mt-4 flex items-center ${getSkillColors('purple').text} text-sm font-medium`}>
                  <span>View work</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </StaggeredItem>

            <StaggeredItem>
              <Link to="/skills" className={`group ${card} ${cardHover} p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-yellow-500/50`}>
                <div className={`text-4xl mb-4 ${getSkillColors('yellow').text}`}>⚡</div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary} group-hover:${getSkillColors('yellow').text} transition-colors`}>Skills</h3>
                <p className={`${textSecondary} leading-relaxed`}>Discover my technical expertise and capabilities</p>
                <div className={`mt-4 flex items-center ${getSkillColors('yellow').text} text-sm font-medium`}>
                  <span>See skills</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </StaggeredItem>

            <StaggeredItem>
              <Link to="/experience" className={`group ${card} ${cardHover} p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-green-500/50`}>
                <div className={`text-4xl mb-4 ${getSkillColors('green').text}`}>💼</div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary} group-hover:${getSkillColors('green').text} transition-colors`}>Experience</h3>
                <p className={`${textSecondary} leading-relaxed`}>Review my professional background and achievements</p>
                <div className={`mt-4 flex items-center ${getSkillColors('green').text} text-sm font-medium`}>
                  <span>View history</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </StaggeredItem>

            <StaggeredItem>
              <Link to="/contact" className={`group ${card} ${cardHover} p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-500/50 md:col-span-2 lg:col-span-1`}>
                <div className={`text-4xl mb-4 ${getSkillColors('cyan').text}`}>📧</div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary} group-hover:${getSkillColors('cyan').text} transition-colors`}>Contact</h3>
                <p className={`${textSecondary} leading-relaxed`}>Let's connect and discuss your next project</p>
                <div className={`mt-4 flex items-center ${getSkillColors('cyan').text} text-sm font-medium`}>
                  <span>Get in touch</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <StaggeredContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
            <StaggeredItem>
              <AnimatedCard className={`${card} ${cardHover} p-6 rounded-xl text-center`} variants={scaleIn}>
                <div className={`text-4xl font-bold ${getSkillColors('cyan').text} mb-2`}>
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className={`${textSecondary} font-medium`}>Years Experience</div>
                <div className={`mt-2 w-full h-1 ${progressBg} rounded-full overflow-hidden`}>
                  <div className={`h-full ${progressFill} rounded-full`} style={{width: '85%'}}></div>
                </div>
              </AnimatedCard>
            </StaggeredItem>
            <StaggeredItem>
              <AnimatedCard className={`${card} ${cardHover} p-6 rounded-xl text-center`} variants={scaleIn}>
                <div className={`text-4xl font-bold ${getSkillColors('purple').text} mb-2`}>
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className={`${textSecondary} font-medium`}>Projects Completed</div>
                <div className={`mt-2 w-full h-1 ${progressBg} rounded-full overflow-hidden`}>
                  <div className="h-full bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full" style={{width: '92%'}}></div>
                </div>
              </AnimatedCard>
            </StaggeredItem>
            <StaggeredItem>
              <AnimatedCard className={`${card} ${cardHover} p-6 rounded-xl text-center`} variants={scaleIn}>
                <div className={`text-4xl font-bold ${getSkillColors('yellow').text} mb-2`}>
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className={`${textSecondary} font-medium`}>Technologies Mastered</div>
                <div className={`mt-2 w-full h-1 ${progressBg} rounded-full overflow-hidden`}>
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-green-500 rounded-full" style={{width: '78%'}}></div>
                </div>
              </AnimatedCard>
            </StaggeredItem>
            <StaggeredItem>
              <AnimatedCard className={`${card} ${cardHover} p-6 rounded-xl text-center`} variants={scaleIn}>
                <div className={`text-4xl font-bold ${getSkillColors('green').text} mb-2`}>
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className={`${textSecondary} font-medium`}>Client Satisfaction</div>
                <div className={`mt-2 w-full h-1 ${progressBg} rounded-full overflow-hidden`}>
                  <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" style={{width: '100%'}}></div>
                </div>
              </AnimatedCard>
            </StaggeredItem>
          </StaggeredContainer>

          {/* Code snippet showcase */}
          <AnimatedSection className="mt-16 max-w-3xl mx-auto" delay={0.3}>
            <div className={`${card} p-6 font-mono text-sm`}>
              <div className={`${getSkillColors('purple').text}`}>interface <span className={accent}>Developer</span> {'{'}</div>
              <div className={`ml-4 ${textSecondary}`}>name: <span className={`${getSkillColors('green').text}`}>string</span>;</div>
              <div className={`ml-4 ${textSecondary}`}>skills: <span className={`${getSkillColors('green').text}`}>string</span>[];</div>
              <div className={`ml-4 ${textSecondary}`}>passion: <span className={`${getSkillColors('yellow').text}`}>'building amazing things'</span>;</div>
              <div className={`${getSkillColors('purple').text}`}>{'}'}</div>
              <br />
              <div className={`${getSkillColors('purple').text}`}>const <span className={accent}>elvi</span>: <span className={accent}>Developer</span> = {'{'}</div>
              <div className={`ml-4 ${textSecondary}`}>name: <span className={`${getSkillColors('yellow').text}`}>'Elvi Zekaj'</span>,</div>
              <div className={`ml-4 ${textSecondary}`}>skills: [<span className={`${getSkillColors('yellow').text}`}>'React'</span>, <span className={`${getSkillColors('yellow').text}`}>'TypeScript'</span>, <span className={`${getSkillColors('yellow').text}`}>'Node.js'</span>],</div>
              <div className={`ml-4 ${textSecondary}`}>passion: <span className={`${getSkillColors('yellow').text}`}>'building amazing things'</span></div>
              <div className={`${getSkillColors('purple').text}`}>{'}'};</div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
