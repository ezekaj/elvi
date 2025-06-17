import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './src/pages/WelcomePage';
import AboutPage from './src/pages/AboutPage';
import ProjectsPage from './src/pages/ProjectsPage';
import SkillsPage from './src/pages/SkillsPage';
import ExperiencePage from './src/pages/ExperiencePage';
import ContactPage from './src/pages/ContactPage';
import BottomNavigation from './src/components/BottomNavigation';
import ThemeToggle from './src/components/ThemeToggle';
import AnimationToggle from './src/components/AnimationToggle';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AnimationProvider } from './src/contexts/AnimationContext';
import { useThemeStyles } from './src/hooks/useThemeStyles';

// Get the base path for GitHub Pages
const basename = process.env.NODE_ENV === 'production' ? '/elvi' : '';

const AppContent = () => {
  const { pageBackground, headerBackground, headerBorder, accent, accentHover, textSecondary } = useThemeStyles();

  return (
    <Router basename={basename}>
      <div className={`min-h-screen ${pageBackground}`}>
        {/* Header */}
        <header className={`${headerBackground} p-4 border-b ${headerBorder} relative`}>
          <div className="flex justify-between items-center">
            <Link to="/" className="block hover:scale-105 transition-transform duration-300">
              <h1 className={`text-xl font-bold ${accent} ${accentHover} transition-colors`}>
                Z.E Digital Systems
              </h1>
              <p className={`text-sm ${textSecondary} hover:opacity-80 transition-opacity`}>
                Elvi Zekaj - Full Stack Developer
              </p>
            </Link>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <AnimationToggle />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<WelcomePage />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <AppContent />
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
