import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
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
    getSkillColors,
    buttonPrimary
  } = useThemeStyles();

  // Fetch projects dynamically from GitHub Gist
  const { projects, isLoading, error, refetch } = useGitHubProjects();

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
                <div className={textSecondary}>
                  {isLoading ? 'loading...' : `${projects.length} real projects found`}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-20 px-6 ${sectionBackground}`}>
        <div className="container mx-auto">
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`${card} rounded-2xl p-6 animate-pulse`}>
                  <div className="h-6 bg-slate-700 rounded w-1/4 mb-4"></div>
                  <div className="h-5 bg-slate-700 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className={`${card} rounded-2xl p-8 text-center max-w-md mx-auto`}>
              <div className="text-4xl mb-4">⚠️</div>
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={refetch}
                className={`${buttonPrimary} px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform`}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Projects List */}
          {!isLoading && !error && projects.length > 0 && (
            <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto" staggerDelay={0.2}>
              {projects.map((project, index) => (
                <StaggeredItem key={project.id}>
                  <AnimatedCard className={`${card} ${cardHover} rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col`} index={index}>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Active'
                            ? `${getSkillColors('green').bg} ${getSkillColors('green').text} border ${getSkillColors('green').border}`
                            : project.status === 'Development'
                            ? `${getSkillColors('purple').bg} ${getSkillColors('purple').text} border ${getSkillColors('purple').border}`
                            : `${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} border ${getSkillColors('cyan').border}`
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} mb-3`}>{project.title}</h3>
                      <p className={`${textSecondary} leading-relaxed text-sm sm:text-base flex-grow`}>{project.description}</p>
                    </div>
                  </AnimatedCard>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          )}

          {/* Empty State */}
          {!isLoading && !error && projects.length === 0 && (
            <div className={`${card} rounded-2xl p-8 text-center max-w-md mx-auto`}>
              <div className="text-4xl mb-4">📂</div>
              <p className={textSecondary}>No projects found</p>
            </div>
          )}

          {/* Featured Project - Portfolio itself (static, no link) */}
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
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-xs sm:text-sm border ${getSkillColors('purple').border} select-none`}>React</span>
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('blue').bg} ${getSkillColors('blue').text} rounded-full text-xs sm:text-sm border ${getSkillColors('blue').border} select-none`}>TypeScript</span>
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>Framer Motion</span>
                  <span className={`px-2 sm:px-3 py-1 ${getSkillColors('green').bg} ${getSkillColors('green').text} rounded-full text-xs sm:text-sm border ${getSkillColors('green').border} select-none`}>Vite</span>
                </div>
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
