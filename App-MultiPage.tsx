import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavigation from './src/components/BottomNavigation';
import WelcomePage from './src/pages/WelcomePage';
import AboutPage from './src/pages/AboutPage';
import ProjectsPage from './src/pages/ProjectsPage';
import SkillsPage from './src/pages/SkillsPage';
import ExperiencePage from './src/pages/ExperiencePage';
import ContactPage from './src/pages/ContactPage';

// TypeScript declarations for global objects
declare global {
  interface Window {
    liquidGlassSystem?: {
      init: () => void;
      [key: string]: any;
    };
  }
}

function App() {
  useEffect(() => {
    // Initialize the Liquid Glass System for multi-page app (silently)
    if (typeof window !== 'undefined') {
      const initializePortfolioSystems = () => {
        // Initialize systems without user-facing indicators
        console.log('🎨 Portfolio Systems Initialized (Silent Mode)');
        
        // Initialize AI and design systems in background
        if (window.liquidGlassSystem) {
          // Hide AI indicators from users
          const style = document.createElement('style');
          style.textContent = `
            .ai-debug-indicator,
            .ai-personalized-message,
            .ai-status-notification {
              display: none !important;
            }
          `;
          document.head.appendChild(style);
          
          // Initialize system silently
          window.liquidGlassSystem.init();
        }
      };

      // Initialize after DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePortfolioSystems);
      } else {
        initializePortfolioSystems();
      }
    }
  }, []);

  return (
    <Router basename="/elvi">
      <div className="App multi-page-app">
        {/* Header */}
        <header className="app-header">
          <div className="header-content">
            <div className="logo-section">
              <img 
                src="./assets/images/zekaj.png" 
                alt="Z.E Digital Systems Logo" 
                className="header-logo"
              />
              <div className="brand-text">
                <h1 className="brand-name">Z.E Digital Systems</h1>
                <p className="brand-tagline">Elvi Zekaj - Full Stack Developer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
