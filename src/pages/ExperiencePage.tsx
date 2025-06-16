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
      title: "Senior Full-Stack Developer",
      company: "TechInnovate Solutions",
      period: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      current: true,
      description: "Leading development of scalable web applications and mentoring junior developers",
      achievements: [
        "Architected and built 5+ enterprise-level applications serving 10,000+ users",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Led a team of 4 developers in agile development practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Digital Dynamics",
      period: "2020 - 2022",
      location: "New York, NY",
      type: "Full-time",
      current: false,
      description: "Developed and maintained multiple client projects using modern web technologies",
      achievements: [
        "Built 15+ responsive web applications for diverse client base",
        "Reduced bug reports by 50% through comprehensive testing strategies",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Mentored 2 junior developers and conducted code reviews"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Docker", "Jest"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      location: "San Francisco, CA",
      type: "Full-time",
      current: false,
      description: "Focused on creating engaging user interfaces and optimizing user experience",
      achievements: [
        "Developed responsive interfaces for 8+ web applications",
        "Improved user engagement by 35% through UX optimizations",
        "Implemented modern CSS techniques and animations",
        "Collaborated with UX designers to create intuitive user flows"
      ],
      technologies: ["JavaScript", "React", "CSS3", "Webpack", "Figma"]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      period: "2018 - 2019",
      location: "Boston, MA",
      type: "Full-time",
      current: false,
      description: "Started my professional journey building websites and learning industry best practices",
      achievements: [
        "Developed 20+ client websites using HTML, CSS, and JavaScript",
        "Learned modern development workflows and version control",
        "Contributed to team projects and gained valuable experience",
        "Completed professional development courses in React and Node.js"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2014 - 2018",
      description: "Focused on software engineering, algorithms, and web development",
      achievements: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2017"
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
                        : `${pageBackground} border-purple-500`
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-white' : 'bg-purple-400'}`}></div>
                    </div>
                  </AnimatedSection>

                  {/* Experience card */}
                  <div className="ml-8 flex-1">
                    <AnimatedCard className={`${card} ${cardHover} rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300`} variants={timelineCard} delay={index * 0.2 + 0.1}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className={`text-xl font-bold ${textPrimary} mb-1`}>{exp.title}</h3>
                          <p className={`${accent} font-medium`}>{exp.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0 md:text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${
                            exp.current
                              ? `${getSkillColors('green').bg} ${getSkillColors('green').text} border ${getSkillColors('green').border}`
                              : `${card} ${textSecondary}`
                          }`}>
                            {exp.period}
                          </span>
                          <div className={`text-sm ${textSecondary}`}>
                            <div>{exp.location}</div>
                            <div>{exp.type}</div>
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
            <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.15}>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300`}>
                  <div className={`text-4xl font-bold ${getSkillColors('cyan').text} mb-2`}>5+</div>
                  <div className={`${textSecondary} font-medium`}>Years Experience</div>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300`}>
                  <div className={`text-4xl font-bold ${getSkillColors('purple').text} mb-2`}>50+</div>
                  <div className={`${textSecondary} font-medium`}>Projects Completed</div>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300`}>
                  <div className={`text-4xl font-bold ${getSkillColors('green').text} mb-2`}>4</div>
                  <div className={`${textSecondary} font-medium`}>Companies</div>
                </AnimatedCard>
              </StaggeredItem>
              <StaggeredItem>
                <AnimatedCard className={`${card} ${cardHover} rounded-xl p-6 text-center hover:border-yellow-500/50 transition-all duration-300`}>
                  <div className={`text-4xl font-bold ${getSkillColors('yellow').text} mb-2`}>10+</div>
                  <div className={`${textSecondary} font-medium`}>Technologies Mastered</div>
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
