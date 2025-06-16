import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        transition-all duration-300 ease-in-out
        hover:scale-110 focus:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark 
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-yellow-400 focus:ring-yellow-400/50 focus:ring-offset-slate-900' 
          : 'bg-white/80 hover:bg-gray-100/80 text-slate-600 focus:ring-blue-400/50 focus:ring-offset-gray-50'
        }
        backdrop-blur-sm border
        ${isDark ? 'border-slate-700' : 'border-gray-200'}
        shadow-lg
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <svg
          className={`
            absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out
            ${isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
            }
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`
            absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out
            ${isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
            }
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>

      {/* Ripple effect on click */}
      <div className={`
        absolute inset-0 rounded-full opacity-0 
        ${isDark ? 'bg-yellow-400' : 'bg-blue-400'}
        animate-ping
      `} />
    </button>
  );
};

export default ThemeToggle;
