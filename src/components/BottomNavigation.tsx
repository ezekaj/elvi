import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  icon: string;
  label: string;
  activeIcon?: string;
}

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      path: '/',
      icon: '🏠',
      activeIcon: '🏠',
      label: 'Home'
    },
    {
      path: '/about',
      icon: '👨‍💻',
      activeIcon: '👨‍💻',
      label: 'About'
    },
    {
      path: '/projects',
      icon: '🚀',
      activeIcon: '🚀',
      label: 'Projects'
    },
    {
      path: '/skills',
      icon: '⚡',
      activeIcon: '⚡',
      label: 'Skills'
    },
    {
      path: '/experience',
      icon: '💼',
      activeIcon: '💼',
      label: 'Experience'
    },
    {
      path: '/contact',
      icon: '📧',
      activeIcon: '📧',
      label: 'Contact'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-navigation fixed bottom-0 left-0 right-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="bottom-nav-container bg-slate-900/90 backdrop-blur-xl border-t border-slate-700">
        <div className="bottom-nav-content flex justify-around items-center px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-cyan-400 bg-cyan-400/10 scale-110'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/5'
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className="nav-icon relative">
                <span className="icon-emoji text-xl mb-1 block transition-transform duration-300 hover:scale-110">
                  {isActive(item.path) ? (item.activeIcon || item.icon) : item.icon}
                </span>
                {isActive(item.path) && (
                  <div className="active-indicator absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </div>
              <span className="nav-label text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
