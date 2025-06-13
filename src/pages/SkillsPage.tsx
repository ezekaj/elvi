import React from 'react';

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
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

  return (
    <div className="skills-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Technical Skills</h1>
            <p className="page-subtitle">
              Expertise in Modern Technologies and Development Practices
            </p>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section className="skills-content">
        <div className="container">
          {/* Skills Categories */}
          <div className="skills-categories">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certifications-section">
            <h3>Certifications & Achievements</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-header">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-status">{cert.status}</span>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-year">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              <div className="tool-category">
                <h4>Development</h4>
                <div className="tool-tags">
                  <span className="tool-tag">VS Code</span>
                  <span className="tool-tag">WebStorm</span>
                  <span className="tool-tag">Postman</span>
                  <span className="tool-tag">Chrome DevTools</span>
                </div>
              </div>
              
              <div className="tool-category">
                <h4>Design</h4>
                <div className="tool-tags">
                  <span className="tool-tag">Figma</span>
                  <span className="tool-tag">Adobe XD</span>
                  <span className="tool-tag">Sketch</span>
                  <span className="tool-tag">Photoshop</span>
                </div>
              </div>
              
              <div className="tool-category">
                <h4>Collaboration</h4>
                <div className="tool-tags">
                  <span className="tool-tag">Slack</span>
                  <span className="tool-tag">Notion</span>
                  <span className="tool-tag">Jira</span>
                  <span className="tool-tag">Trello</span>
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
