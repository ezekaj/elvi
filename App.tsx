import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './src/pages/WelcomePage';
import AboutPage from './src/pages/AboutPage';
import ProjectsPage from './src/pages/ProjectsPage';
import SkillsPage from './src/pages/SkillsPage';
import ExperiencePage from './src/pages/ExperiencePage';
import ContactPage from './src/pages/ContactPage';
import BottomNavigation from './src/components/BottomNavigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        {/* Simple Header */}
        <header className="bg-slate-800 p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold text-cyan-400">Z.E Digital Systems</h1>
          <p className="text-sm text-slate-400">Elvi Zekaj - Full Stack Developer</p>
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
