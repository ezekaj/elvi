import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggeredContainer, { StaggeredItem } from '../components/animations/StaggeredContainer';
import AnimatedCard from '../components/animations/AnimatedCard';
import { heroTitle, heroDescription } from '../config/animations';

const ProjectsPage = () => {
  useScrollToTop();
  const {
    pageBackground,
    textPrimary,
    textSecondary,
    accent,
    card,
    cardHover,
    sectionBackground,
    getSkillColors
  } = useThemeStyles();

  const projects = [
    {
      id: 1,
      title: "Fract_ol - Fractal Explorer",
      description: "A graphics programming project that creates graphically beautiful fractals using mathematical algorithms and the MiniLibX library",
      technologies: ["C", "MiniLibX", "Mathematics", "Graphics Programming"],
      status: "Completed",
      link: "https://github.com/ezekaj/fract_ol"
    },
    {
      id: 2,
      title: "Learning Solidity Web Platform",
      description: "Interactive web platform designed for learning Solidity programming language with hands-on examples and tutorials",
      technologies: ["TypeScript", "React", "Solidity", "Web3", "Blockchain"],
      status: "Active",
      link: "https://github.com/ezekaj/learning_sol"
    },
    {
      id: 3,
      title: "Auto Scheduling Agent",
      description: "AI-powered scheduling system using Large Language Models to create intelligent agents that work as digital secretaries",
      technologies: ["Python", "LLM", "AI Agents", "Natural Language Processing"],
      status: "Development",
      link: "https://github.com/ezekaj/auto_scheduling"
    },
    {
      id: 4,
      title: "Rregullo Tiranen - City Portal",
      description: "A civic engagement web portal designed to help citizens of Tirana report and track city issues, promoting community involvement",
      technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
      status: "Completed",
      link: "https://github.com/ezekaj/Rregullo_Tiranen"
    },
    {
      id: 5,
      title: "Push_swap - Sorting Algorithm",
      description: "Advanced algorithm project implementing efficient sorting techniques with stack operations and optimization strategies",
      technologies: ["C", "Algorithms", "Data Structures", "Optimization"],
      status: "Completed",
      link: "https://github.com/ezekaj/push_swap"
    },
    {
      id: 6,
      title: "Minitalk - UNIX Signals",
      description: "Small data exchange program demonstrating inter-process communication using UNIX signals for message transmission",
      technologies: ["C", "UNIX Signals", "System Programming", "IPC"],
      status: "Completed",
      link: "https://github.com/ezekaj/minitalk"
    }
  ];

  return (
    <div className={`min-h-screen ${pageBackground} ${textPrimary}`}>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variants={heroTitle}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className={accent}>My</span>{' '}
                <span className="text-purple-400">Projects</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={heroDescription} delay={0.2}>
              <p className={`text-xl md:text-2xl ${textSecondary} leading-relaxed mb-8`}>
                Real Projects from My GitHub Portfolio
              </p>
            </AnimatedSection>

            {/* Terminal-style project count */}
            <AnimatedSection delay={0.4}>
              <div className={`${card} rounded-lg p-4 max-w-md mx-auto font-mono text-sm`}>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className={`${textSecondary} text-sm ml-4`}>~/projects</span>
                </div>
                <div className={`${getSkillColors('green').text}`}>
                  <span className={accent}>$</span> ls -la projects/
                </div>
                <div className={textSecondary}>{projects.length} real projects found</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-20 px-6 ${sectionBackground}`}>
        <div className="container mx-auto">
          <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto" staggerDelay={0.2}>
            {projects.map((project, index) => (
              <StaggeredItem key={project.id}>
                <AnimatedCard className={`${card} ${cardHover} rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col`} index={index}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live'
                        ? `${getSkillColors('green').bg} ${getSkillColors('green').text} border ${getSkillColors('green').border}`
                        : `${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} border ${getSkillColors('yellow').border}`
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col">
                  <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} mb-3`}>{project.title}</h3>
                  <p className={`${textSecondary} leading-relaxed mb-4 text-sm sm:text-base flex-grow`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a href={project.link} className={`inline-flex items-center ${accent} hover:opacity-80 font-medium transition-opacity text-sm sm:text-base`}>
                      View Project
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
                </AnimatedCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          {/* Featured Project */}
          <AnimatedSection className={`mt-12 sm:mt-16 ${card} rounded-2xl p-4 sm:p-6 lg:p-8`} delay={0.6}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h3 className={`${accent} font-medium mb-2 text-sm sm:text-base`}>Featured Project</h3>
                <h2 className={`text-2xl sm:text-3xl font-bold ${textPrimary} mb-4`}>Personal Portfolio Website</h2>
                <p className={`${textSecondary} leading-relaxed mb-6 text-sm sm:text-base`}>
                  This portfolio website showcases modern web development practices with
                  glassmorphism design, responsive layouts, and smooth animations.
                  Built with React, TypeScript, and Framer Motion for optimal performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-xs sm:text-sm border ${getSkillColors('purple').border} select-none`}>React</span>
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('blue').bg} ${getSkillColors('blue').text} rounded-full text-xs sm:text-sm border ${getSkillColors('blue').border} select-none`}>TypeScript</span>
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>Framer Motion</span>
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('green').bg} ${getSkillColors('green').text} rounded-full text-xs sm:text-sm border ${getSkillColors('green').border} select-none`}>Vite</span>
                </div>
                <a href="https://github.com/ezekaj/elvi" className={`inline-flex items-center ${accent} hover:opacity-80 font-medium transition-opacity text-sm sm:text-base`}>
                  View Source Code
                  <span className="ml-2">→</span>
                </a>
              </div>
              <div className="mt-6 lg:mt-0">
                <div className={`${card} rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-hidden`}>
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className={`${textSecondary} ml-2 sm:ml-4 text-xs sm:text-sm`}>portfolio.tsx</span>
                  </div>
                  <div className="space-y-1">
                    <div className="break-all">
                      <span className={`${getSkillColors('purple').text}`}>const</span>{' '}
                      <span className={accent}>portfolio</span>{' '}
                      <span className={textSecondary}>=</span>{' '}
                      <span className={`${getSkillColors('yellow').text}`}>"innovative"</span>
                    </div>
                    <div className="break-all">
                      <span className={`${getSkillColors('purple').text}`}>const</span>{' '}
                      <span className={accent}>design</span>{' '}
                      <span className={textSecondary}>=</span>{' '}
                      <span className={`${getSkillColors('yellow').text}`}>"cutting-edge"</span>
                    </div>
                    <div className="break-all">
                      <span className={`${getSkillColors('purple').text}`}>const</span>{' '}
                      <span className={accent}>experience</span>{' '}
                      <span className={textSecondary}>=</span>{' '}
                      <span className={`${getSkillColors('yellow').text}`}>"exceptional"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
