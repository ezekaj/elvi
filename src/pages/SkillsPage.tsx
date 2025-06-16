import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggeredContainer, { StaggeredItem } from '../components/animations/StaggeredContainer';
import AnimatedCard from '../components/animations/AnimatedCard';
import { heroTitle, heroDescription } from '../config/animations';

const SkillsPage = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "cyan",
      skills: [
        { name: "React", level: 95, description: "Advanced component architecture and state management" },
        { name: "TypeScript", level: 90, description: "Type-safe development and advanced patterns" },
        { name: "Next.js", level: 85, description: "Server-side rendering and full-stack applications" },
        { name: "CSS3/SCSS", level: 92, description: "Modern styling, animations, and responsive design" },
        { name: "JavaScript ES6+", level: 95, description: "Modern JavaScript features and best practices" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "purple",
      skills: [
        { name: "Node.js", level: 88, description: "Server-side JavaScript and API development" },
        { name: "Express.js", level: 85, description: "RESTful APIs and middleware development" },
        { name: "Python", level: 80, description: "Data processing and machine learning applications" },
        { name: "PostgreSQL", level: 82, description: "Database design and optimization" },
        { name: "MongoDB", level: 78, description: "NoSQL database management and aggregation" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "green",
      skills: [
        { name: "AWS", level: 75, description: "Cloud infrastructure and serverless architecture" },
        { name: "Docker", level: 70, description: "Containerization and deployment strategies" },
        { name: "Git/GitHub", level: 90, description: "Version control and collaborative development" },
        { name: "CI/CD", level: 72, description: "Automated testing and deployment pipelines" },
        { name: "Vercel/Netlify", level: 85, description: "Modern deployment platforms and edge computing" }
      ]
    },
    {
      title: "Design & UX",
      icon: "🎯",
      color: "yellow",
      skills: [
        { name: "UI/UX Design", level: 80, description: "User-centered design and interface optimization" },
        { name: "Figma", level: 75, description: "Design systems and prototyping" },
        { name: "Responsive Design", level: 92, description: "Mobile-first and adaptive layouts" },
        { name: "Accessibility", level: 85, description: "WCAG compliance and inclusive design" },
        { name: "Design Systems", level: 78, description: "Component libraries and brand consistency" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      status: "Active"
    },
    {
      title: "React Professional Certificate",
      issuer: "Meta",
      year: "2022",
      status: "Active"
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2021",
      status: "Completed"
    }
  ];

  // Use the theme-aware color function instead of local one

  return (
    <div className={`min-h-screen ${pageBackground} ${textPrimary}`}>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variants={heroTitle}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className={accent}>Technical</span>{' '}
                <span className="text-purple-400">Skills</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={heroDescription} delay={0.2}>
              <p className={`text-xl md:text-2xl ${textSecondary} leading-relaxed mb-8`}>
                Expertise in Modern Technologies and Development Practices
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section className={`py-20 px-6 ${sectionBackground}`}>
        <div className="container mx-auto">
          {/* Skills Categories */}
          <StaggeredContainer className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto" staggerDelay={0.2}>
            {skillCategories.map((category, categoryIndex) => {
              const colorClasses = getSkillColors(category.color);
              return (
                <StaggeredItem key={categoryIndex}>
                  <AnimatedCard className={`${card} ${cardHover} rounded-2xl p-4 sm:p-6 h-full`} index={categoryIndex}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl mr-3">{category.icon}</span>
                    <h3 className={`text-lg sm:text-xl font-bold ${colorClasses.text}`}>{category.title}</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center gap-2">
                          <span className={`font-medium ${textPrimary} text-sm sm:text-base truncate`}>{skill.name}</span>
                          <span className={`text-xs sm:text-sm font-medium ${colorClasses.text} flex-shrink-0`}>{skill.level}%</span>
                        </div>
                        <div className={`w-full ${sectionBackground} rounded-full h-2`}>
                          <div
                            className={`h-2 rounded-full ${colorClasses.progress} transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className={`text-xs sm:text-sm ${textSecondary} leading-relaxed`}>{skill.description}</p>
                      </div>
                    ))}
                  </div>
                  </AnimatedCard>
                </StaggeredItem>
              );
            })}
          </StaggeredContainer>

          {/* Certifications */}
          <div className="mt-16">
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className={accent}>Certifications</span>{' '}
                <span className="text-purple-400">& Achievements</span>
              </h3>
            </AnimatedSection>
            <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto" staggerDelay={0.15}>
              {certifications.map((cert, index) => (
                <StaggeredItem key={index}>
                  <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col`} index={index}>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h4 className={`font-bold ${textPrimary} text-sm sm:text-base leading-tight`}>{cert.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        cert.status === 'Active'
                          ? `${getSkillColors('green').bg} ${getSkillColors('green').text} border ${getSkillColors('green').border}`
                          : `${getSkillColors('blue').bg} ${getSkillColors('blue').text} border ${getSkillColors('blue').border}`
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className={`${accent} text-xs sm:text-sm mb-1 font-medium`}>{cert.issuer}</p>
                      <p className={`${textSecondary} text-xs sm:text-sm`}>{cert.year}</p>
                    </div>
                  </AnimatedCard>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16">
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className="text-purple-400">Tools</span>{' '}
                <span className="text-yellow-400">& Technologies</span>
              </h3>
            </AnimatedSection>
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto" staggerDelay={0.2}>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 h-full`}>
                  <h4 className={`text-base sm:text-lg font-bold ${getSkillColors('cyan').text} mb-3 sm:mb-4`}>Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>VS Code</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>WebStorm</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>Postman</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-xs sm:text-sm border ${getSkillColors('cyan').border} select-none`}>Chrome DevTools</span>
                  </div>
                </AnimatedCard>
              </StaggeredItem>

              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 h-full`}>
                  <h4 className={`text-base sm:text-lg font-bold ${getSkillColors('purple').text} mb-3 sm:mb-4`}>Design</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-xs sm:text-sm border ${getSkillColors('purple').border} select-none`}>Figma</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-xs sm:text-sm border ${getSkillColors('purple').border} select-none`}>Adobe XD</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-xs sm:text-sm border ${getSkillColors('purple').border} select-none`}>Sketch</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-xs sm:text-sm border ${getSkillColors('purple').border} select-none`}>Photoshop</span>
                  </div>
                </AnimatedCard>
              </StaggeredItem>

              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 h-full`}>
                  <h4 className={`text-base sm:text-lg font-bold ${getSkillColors('yellow').text} mb-3 sm:mb-4`}>Collaboration</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} rounded-full text-xs sm:text-sm border ${getSkillColors('yellow').border} select-none`}>Slack</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} rounded-full text-xs sm:text-sm border ${getSkillColors('yellow').border} select-none`}>Notion</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} rounded-full text-xs sm:text-sm border ${getSkillColors('yellow').border} select-none`}>Jira</span>
                    <span className={`px-2 sm:px-3 py-1 ${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} rounded-full text-xs sm:text-sm border ${getSkillColors('yellow').border} select-none`}>Trello</span>
                  </div>
                </AnimatedCard>
              </StaggeredItem>
            </StaggeredContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
