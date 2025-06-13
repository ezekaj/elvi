import React from 'react';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechInnovate Solutions",
      period: "2022 - Present",
      location: "Remote",
      type: "Full-time",
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
    <div className="experience-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Professional Experience</h1>
            <p className="page-subtitle">
              A Journey of Growth, Innovation, and Technical Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-content">
        <div className="container">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < experiences.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <div className="experience-title-section">
                        <h3 className="experience-title">{exp.title}</h3>
                        <p className="experience-company">{exp.company}</p>
                      </div>
                      <div className="experience-meta">
                        <span className="experience-period">{exp.period}</span>
                        <span className="experience-location">{exp.location}</span>
                        <span className="experience-type">{exp.type}</span>
                      </div>
                    </div>
                    
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="experience-achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="experience-technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <span className="education-period">{edu.period}</span>
                </div>
                <p className="education-school">{edu.school}</p>
                <p className="education-description">{edu.description}</p>
                <div className="education-achievements">
                  <h5>Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Career Stats */}
          <div className="career-stats">
            <h3>Career Highlights</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
