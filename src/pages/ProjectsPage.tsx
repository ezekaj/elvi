import useScrollToTop from '../hooks/useScrollToTop';

const ProjectsPage = () => {
  useScrollToTop();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features",
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL"],
      status: "In Development",
      link: "#"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Data visualization platform with machine learning insights and predictive analytics",
      technologies: ["Python", "React", "TensorFlow", "D3.js"],
      status: "Live",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication and real-time transactions",
      technologies: ["React Native", "Node.js", "AWS", "Blockchain"],
      status: "Live",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cyan-400">My</span>{' '}
              <span className="text-purple-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Innovative Solutions Built with Modern Technologies
            </p>

            {/* Terminal-style project count */}
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 max-w-md mx-auto font-mono text-sm">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-slate-400 text-sm ml-4">~/projects</span>
              </div>
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> ls -la projects/
              </div>
              <div className="text-slate-300">{projects.length} innovative solutions found</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                      View Project
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Project */}
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-cyan-400 font-medium mb-2">Featured Project</h3>
                <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Portfolio System</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  This very portfolio showcases cutting-edge 2024 design trends including
                  modern developer aesthetics, responsive design, and clean architecture.
                  Built with React, TypeScript, and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">TypeScript</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">Tailwind</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Vite</span>
                </div>
                <a href="https://github.com/ezekaj/elvi" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  View Source Code
                  <span className="ml-2">→</span>
                </a>
              </div>
              <div>
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-slate-400 ml-4">portfolio.tsx</span>
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-400">portfolio</span>{' '}
                      <span className="text-slate-300">=</span>{' '}
                      <span className="text-yellow-400">"innovative"</span>
                    </div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-400">design</span>{' '}
                      <span className="text-slate-300">=</span>{' '}
                      <span className="text-yellow-400">"cutting-edge"</span>
                    </div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-400">experience</span>{' '}
                      <span className="text-slate-300">=</span>{' '}
                      <span className="text-yellow-400">"exceptional"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
