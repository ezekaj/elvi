const SkillsPage = () => {
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

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', progress: 'bg-gradient-to-r from-cyan-500 to-cyan-600' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', progress: 'bg-gradient-to-r from-purple-500 to-purple-600' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', progress: 'bg-gradient-to-r from-green-500 to-green-600' },
      yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30', progress: 'bg-gradient-to-r from-yellow-500 to-yellow-600' }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cyan-400">Technical</span>{' '}
              <span className="text-purple-400">Skills</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Expertise in Modern Technologies and Development Practices
            </p>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div key={categoryIndex} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className={`text-xl font-bold ${colorClasses.text}`}>{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className={`text-sm font-medium ${colorClasses.text}`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${colorClasses.progress}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-slate-400">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-cyan-400">Certifications</span>{' '}
              <span className="text-purple-400">& Achievements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-white">{cert.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Active'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-purple-400">Tools</span>{' '}
              <span className="text-yellow-400">& Technologies</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-cyan-400 mb-4">Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">VS Code</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">WebStorm</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">Postman</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">Chrome DevTools</span>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-purple-400 mb-4">Design</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Figma</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Adobe XD</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Sketch</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Photoshop</span>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-yellow-400 mb-4">Collaboration</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">Slack</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">Notion</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">Jira</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">Trello</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
