import { Link, useLocation } from 'react-router-dom';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface NavItem {
  path: string;
  icon: string;
  label: string;
  activeIcon?: string;
}

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { navBackground, navItem, navItemActive, navItemHover, accent } = useThemeStyles();

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
      <div className={`bottom-nav-container ${navBackground} border-t`}>
        <div className="bottom-nav-content flex justify-around items-center px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                isActive(item.path)
                  ? `${navItemActive} scale-110`
                  : `${navItem} ${navItemHover}`
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className="nav-icon relative">
                <span className="icon-emoji text-xl mb-1 block transition-transform duration-300 hover:scale-110">
                  {isActive(item.path) ? (item.activeIcon || item.icon) : item.icon}
                </span>
                {isActive(item.path) && (
                  <div className={`active-indicator absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 ${accent.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
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
