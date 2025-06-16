import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './src/pages/WelcomePage';
import AboutPage from './src/pages/AboutPage';
import ProjectsPage from './src/pages/ProjectsPage';
import SkillsPage from './src/pages/SkillsPage';
import ExperiencePage from './src/pages/ExperiencePage';
import ContactPage from './src/pages/ContactPage';
import BottomNavigation from './src/components/BottomNavigation';

// Get the base path for GitHub Pages
const basename = import.meta.env.PROD ? '/elvi' : '';

function App() {
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-slate-900">
        {/* Header */}
        <header className="bg-slate-800 p-4 border-b border-slate-700">
          <Link to="/" className="block hover:scale-105 transition-transform duration-300">
            <h1 className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              Z.E Digital Systems
            </h1>
            <p className="text-sm text-slate-400 hover:text-slate-300 transition-colors">
              Elvi Zekaj - Full Stack Developer
            </p>
          </Link>
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
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
