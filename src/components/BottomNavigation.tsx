import React from 'react';
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
    <nav className="bottom-navigation" role="navigation" aria-label="Main navigation">
      <div className="bottom-nav-container">
        <div className="bottom-nav-content">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className="nav-icon">
                <span className="icon-emoji">
                  {isActive(item.path) ? (item.activeIcon || item.icon) : item.icon}
                </span>
                {isActive(item.path) && <div className="active-indicator"></div>}
              </div>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
