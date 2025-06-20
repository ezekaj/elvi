import useScrollToTop from '../hooks/useScrollToTop';
import { useThemeStyles } from '../hooks/useThemeStyles';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggeredContainer, { StaggeredItem } from '../components/animations/StaggeredContainer';
import AnimatedCard from '../components/animations/AnimatedCard';
import { heroTitle, heroDescription, timelineDot, timelineCard } from '../config/animations';

const ExperiencePage = () => {
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

  const experiences = [
    {
      id: 1,
      title: "ETH Prague 2025 Hackathon",
      company: "ETHGlobal",
      period: "May 30 - June 1, 2025",
      location: "Prague, Czech Republic",
      type: "Hackathon",
      current: false,
      description: "Developed blockchain-based email verification system with smart contract implementation for secure identity proofing",
      achievements: [
        "Architected and implemented Solidity smart contracts for email verification (68.9% of codebase)",
        "Built decentralized identity verification system using Ethereum blockchain",
        "Collaborated with international team on innovative Web3 solution",
        "Gained hands-on experience with blockchain development and DeFi protocols"
      ],
      technologies: ["Solidity", "Ethereum", "Web3.js", "JavaScript", "TypeScript", "Smart Contracts"]
    },
    {
      id: 2,
      title: "JunctionX Tirana 2025 Hackathon",
      company: "Junction & ONE Albania",
      period: "May 2-4, 2025",
      location: "Tirana, Albania",
      type: "Hackathon",
      current: false,
      description: "Built comprehensive SME dashboard for ONE Albania telecom services, focusing on intelligent service management and analytics",
      achievements: [
        "Developed full-stack SME dashboard serving telecom service management needs",
        "Implemented real-time usage monitoring and cost optimization features",
        "Created AI-powered recommendations system for service optimization",
        "Led team of 5 developers in agile hackathon environment"
      ],
      technologies: ["React", "Vite", "Material UI", "TypeScript", "Node.js", "Recharts"]
    }
  ];

  const education = [
    {
      degree: "Computer Science & Software Engineering",
      school: "42 School",
      period: "2024 - Present",
      description: "Intensive peer-to-peer learning program focused on practical programming skills and project-based learning",
      achievements: [
        "Completed core curriculum projects including Libft, Printf, and get_next_line",
        "Developed advanced algorithms and data structures (push_swap project)",
        "Built graphics programming projects with fractals (fract_ol)",
        "Mastered low-level programming and system administration"
      ]
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
                <span className={accent}>Professional</span>{' '}
                <span className="text-purple-400">Experience</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variants={heroDescription} delay={0.2}>
              <p className={`text-xl md:text-2xl ${textSecondary} leading-relaxed mb-8`}>
                A Journey of Growth, Innovation, and Technical Excellence
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className={`py-20 px-6 ${sectionBackground}`}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                )}

                <div className="flex items-start">
                  {/* Timeline dot */}
                  <AnimatedSection variants={timelineDot} delay={index * 0.2}>
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 ${
                      exp.current
                        ? 'bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50'
                        : exp.type === 'Hackathon'
                        ? `${pageBackground} border-yellow-500 shadow-lg shadow-yellow-500/30`
                        : `${pageBackground} border-purple-500`
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${
                        exp.current
                          ? 'bg-white'
                          : exp.type === 'Hackathon'
                          ? 'bg-yellow-400'
                          : 'bg-purple-400'
                      }`}></div>
                    </div>
                  </AnimatedSection>

                  {/* Experience card */}
                  <div className="ml-8 flex-1">
                    <AnimatedCard className={`${card} ${cardHover} rounded-2xl p-6 transition-all duration-300 ${
                      exp.type === 'Hackathon'
                        ? 'hover:border-yellow-500/50 border-yellow-500/20'
                        : 'hover:border-cyan-500/50'
                    }`} variants={timelineCard} delay={index * 0.2 + 0.1}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`text-xl font-bold ${textPrimary}`}>{exp.title}</h3>
                            {exp.type === 'Hackathon' && (
                              <span className="text-lg">🏆</span>
                            )}
                          </div>
                          <p className={`${accent} font-medium`}>{exp.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0 md:text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${
                            exp.current
                              ? `${getSkillColors('green').bg} ${getSkillColors('green').text} border ${getSkillColors('green').border}`
                              : exp.type === 'Hackathon'
                              ? `${getSkillColors('yellow').bg} ${getSkillColors('yellow').text} border ${getSkillColors('yellow').border}`
                              : `${card} ${textSecondary}`
                          }`}>
                            {exp.period}
                          </span>
                          <div className={`text-sm ${textSecondary}`}>
                            <div>{exp.location}</div>
                            <div className={exp.type === 'Hackathon' ? `${getSkillColors('yellow').text} font-medium` : ''}>{exp.type}</div>
                          </div>
                        </div>
                      </div>

                      <p className={`${textSecondary} mb-4`}>{exp.description}</p>

                      <div className="mb-4">
                        <h4 className={`${getSkillColors('purple').text} font-medium mb-2`}>Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className={`${textSecondary} text-sm flex items-start`}>
                              <span className={`${accent} mr-2 mt-1`}>•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`${getSkillColors('yellow').text} font-medium mb-2`}>Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className={`px-3 py-1 ${getSkillColors('cyan').bg} ${getSkillColors('cyan').text} rounded-full text-sm border ${getSkillColors('cyan').border}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className={`${getSkillColors('purple').text}`}>Education</span>
              </h3>
            </AnimatedSection>
            {education.map((edu, index) => (
              <AnimatedCard key={index} className={`${card} ${cardHover} rounded-2xl p-6`} delay={0.4}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className={`text-xl font-bold ${textPrimary} mb-1`}>{edu.degree}</h4>
                    <p className={`${accent} font-medium`}>{edu.school}</p>
                  </div>
                  <span className={`mt-2 md:mt-0 px-3 py-1 ${getSkillColors('purple').bg} ${getSkillColors('purple').text} rounded-full text-sm border ${getSkillColors('purple').border}`}>
                    {edu.period}
                  </span>
                </div>
                <p className={`${textSecondary} mb-4`}>{edu.description}</p>
                <div>
                  <h5 className={`${getSkillColors('yellow').text} font-medium mb-2`}>Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className={`${textSecondary} text-sm flex items-start`}>
                        <span className={`${accent} mr-2 mt-1`}>•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Career Stats */}
          <div className="mt-16">
            <AnimatedSection>
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className={accent}>Career</span>{' '}
                <span className={`${getSkillColors('yellow').text}`}>Highlights</span>
              </h3>
            </AnimatedSection>
            <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 text-center hover:border-cyan-500/50 transition-all duration-300 min-h-[120px] flex flex-col justify-center`}>
                  <div className={`text-3xl sm:text-4xl font-bold ${getSkillColors('cyan').text} mb-2`}>19+</div>
                  <div className={`${textSecondary} font-medium text-sm sm:text-base`}>GitHub Projects</div>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 text-center hover:border-purple-500/50 transition-all duration-300 min-h-[120px] flex flex-col justify-center`}>
                  <div className={`text-3xl sm:text-4xl font-bold ${getSkillColors('purple').text} mb-2`}>2</div>
                  <div className={`${textSecondary} font-medium text-sm sm:text-base`}>Hackathons</div>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 text-center hover:border-green-500/50 transition-all duration-300 min-h-[120px] flex flex-col justify-center`}>
                  <div className={`text-3xl sm:text-4xl font-bold ${getSkillColors('green').text} mb-2`}>6+</div>
                  <div className={`${textSecondary} font-medium text-sm sm:text-base`}>Languages</div>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-4 sm:p-6 text-center hover:border-yellow-500/50 transition-all duration-300 min-h-[120px] flex flex-col justify-center`}>
                  <div className={`text-3xl sm:text-4xl font-bold ${getSkillColors('yellow').text} mb-2`}>1</div>
                  <div className={`${textSecondary} font-medium text-sm sm:text-base`}>Year at 42</div>
                </AnimatedCard>
              </StaggeredItem>
            </StaggeredContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
