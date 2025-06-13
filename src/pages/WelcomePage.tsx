import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to My Digital Universe
            </h1>
            <p className="hero-subtitle">
              Where Innovation Meets Creativity
            </p>
            <p className="hero-description">
              I'm Elvi Zekaj, a passionate full-stack developer crafting exceptional digital experiences 
              with cutting-edge technologies and modern design principles.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-actions">
              <Link to="/about" className="cta-button primary">
                Discover My Story
              </Link>
              <Link to="/projects" className="cta-button secondary">
                View My Work
              </Link>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
            <div className="hero-image-container">
              <img 
                src="./assets/images/profile.png" 
                alt="Elvi Zekaj - Full Stack Developer"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="quick-nav-section">
        <div className="container">
          <h2 className="section-title">Explore My Portfolio</h2>
          <div className="quick-nav-grid">
            <Link to="/about" className="nav-card">
              <div className="nav-card-icon">👨‍💻</div>
              <h3>About Me</h3>
              <p>Learn about my journey, skills, and passion for technology</p>
            </Link>
            
            <Link to="/projects" className="nav-card">
              <div className="nav-card-icon">🚀</div>
              <h3>Projects</h3>
              <p>Explore my latest work and innovative solutions</p>
            </Link>
            
            <Link to="/skills" className="nav-card">
              <div className="nav-card-icon">⚡</div>
              <h3>Skills</h3>
              <p>Discover my technical expertise and capabilities</p>
            </Link>
            
            <Link to="/experience" className="nav-card">
              <div className="nav-card-icon">💼</div>
              <h3>Experience</h3>
              <p>Review my professional background and achievements</p>
            </Link>
            
            <Link to="/contact" className="nav-card">
              <div className="nav-card-icon">📧</div>
              <h3>Contact</h3>
              <p>Let's connect and discuss your next project</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-number">5+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">50+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">10+</div>
              <div className="highlight-label">Technologies Mastered</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
