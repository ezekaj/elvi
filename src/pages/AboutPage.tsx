import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">
              Passionate Developer, Creative Problem Solver, Technology Enthusiast
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {/* Profile Section */}
            <div className="profile-section">
              <div className="profile-image-container">
                <img 
                  src="./assets/images/profile.png" 
                  alt="Elvi Zekaj - Full Stack Developer"
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <h2>Elvi Zekaj</h2>
                <p className="role">Full-Stack Developer</p>
                <p className="location">📍 Based in Digital Innovation</p>
              </div>
            </div>

            {/* Story Section */}
            <div className="story-section">
              <h3>My Journey</h3>
              <p>
                With over 5 years of experience in full-stack development, I've dedicated my career 
                to creating exceptional digital experiences that bridge the gap between innovative 
                technology and user-centered design.
              </p>
              <p>
                My passion lies in transforming complex problems into elegant, scalable solutions 
                using modern technologies like React, Node.js, TypeScript, and cloud platforms. 
                I believe in writing clean, maintainable code that not only works but inspires.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest tech trends, contributing 
                to open-source projects, or mentoring aspiring developers in the community.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h3>What Drives Me</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h4>Excellence</h4>
                <p>Committed to delivering high-quality solutions that exceed expectations</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h4>Innovation</h4>
                <p>Always exploring new technologies and pushing the boundaries of what's possible</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Collaboration</h4>
                <p>Believing in the power of teamwork and open communication</p>
              </div>
              <div className="value-card">
                <div className="value-icon">📚</div>
                <h4>Learning</h4>
                <p>Continuously growing and adapting to the ever-evolving tech landscape</p>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="approach-section">
            <h3>My Approach</h3>
            <div className="approach-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Understand</h4>
                  <p>Deep dive into requirements and user needs</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Design</h4>
                  <p>Create intuitive and scalable architecture</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Develop</h4>
                  <p>Build with modern technologies and best practices</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>Deliver</h4>
                  <p>Deploy and maintain with ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
