const ExperiencePage = () => {
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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cyan-400">Professional</span>{' '}
              <span className="text-purple-400">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              A Journey of Growth, Innovation, and Technical Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6 bg-slate-800/50">
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
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 ${
                    exp.current
                      ? 'bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50'
                      : 'bg-slate-800 border-purple-500'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-white' : 'bg-purple-400'}`}></div>
                  </div>

                  {/* Experience card */}
                  <div className="ml-8 flex-1">
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0 md:text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${
                            exp.current
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-slate-700 text-slate-300'
                          }`}>
                            {exp.period}
                          </span>
                          <div className="text-sm text-slate-400">
                            <div>{exp.location}</div>
                            <div>{exp.type}</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-purple-400 font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-slate-300 text-sm flex items-start">
                              <span className="text-cyan-400 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-yellow-400 font-medium mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-purple-400">Education</span>
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-cyan-400 font-medium">{edu.school}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{edu.description}</p>
                <div>
                  <h5 className="text-yellow-400 font-medium mb-2">Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Career Stats */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-cyan-400">Career</span>{' '}
              <span className="text-yellow-400">Highlights</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-slate-300 font-medium">Projects Completed</div>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">4</div>
                <div className="text-slate-300 font-medium">Companies</div>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-slate-300 font-medium">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
