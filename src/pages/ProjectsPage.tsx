import React from 'react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "./assets/images/project-placeholder.jpg",
      status: "Live",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features",
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL"],
      image: "./assets/images/project-placeholder.jpg",
      status: "In Development",
      link: "#"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Data visualization platform with machine learning insights and predictive analytics",
      technologies: ["Python", "React", "TensorFlow", "D3.js"],
      image: "./assets/images/project-placeholder.jpg",
      status: "Live",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication and real-time transactions",
      technologies: ["React Native", "Node.js", "AWS", "Blockchain"],
      image: "./assets/images/project-placeholder.jpg",
      status: "Live",
      link: "#"
    }
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">
              Innovative Solutions Built with Modern Technologies
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-status">{project.status}</div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a href={project.link} className="project-link">
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Project */}
          <div className="featured-project">
            <div className="featured-content">
              <div className="featured-text">
                <h3>Featured Project</h3>
                <h2>AI-Powered Portfolio System</h2>
                <p>
                  This very portfolio showcases cutting-edge 2024 design trends including 
                  AI-powered personalization, Bento layouts, Scrollytelling, and Emotionally 
                  Intelligent UI systems. Built with React, TypeScript, and advanced CSS techniques.
                </p>
                <div className="featured-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Vite</span>
                </div>
                <a href="https://github.com/ezekaj/elvi" className="featured-link">
                  View Source Code →
                </a>
              </div>
              <div className="featured-visual">
                <div className="code-preview">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="code-title">portfolio.tsx</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="code-keyword">const</span> 
                      <span className="code-variable"> portfolio</span> 
                      <span className="code-operator"> = </span>
                      <span className="code-string">"innovative"</span>
                    </div>
                    <div className="code-line">
                      <span className="code-keyword">const</span> 
                      <span className="code-variable"> design</span> 
                      <span className="code-operator"> = </span>
                      <span className="code-string">"cutting-edge"</span>
                    </div>
                    <div className="code-line">
                      <span className="code-keyword">const</span> 
                      <span className="code-variable"> ai</span> 
                      <span className="code-operator"> = </span>
                      <span className="code-string">"personalized"</span>
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
