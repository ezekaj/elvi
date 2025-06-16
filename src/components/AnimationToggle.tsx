import React from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { useThemeStyles } from '../hooks/useThemeStyles';

const AnimationToggle: React.FC = () => {
  const { animationsEnabled, toggleAnimations, prefersReducedMotion } = useAnimation();
  const { isDark } = useThemeStyles();

  if (prefersReducedMotion) {
    return null; // Don't show toggle if user prefers reduced motion
  }

  return (
    <button
      onClick={toggleAnimations}
      className={`
        relative inline-flex items-center justify-center
        w-10 h-10 rounded-full
        transition-all duration-300 ease-in-out
        hover:scale-110 focus:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark 
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-purple-400 focus:ring-purple-400/50 focus:ring-offset-slate-900' 
          : 'bg-white/80 hover:bg-gray-100/80 text-purple-600 focus:ring-purple-400/50 focus:ring-offset-gray-50'
        }
        backdrop-blur-sm border
        ${isDark ? 'border-slate-700' : 'border-gray-200'}
        shadow-lg
      `}
      aria-label={`${animationsEnabled ? 'Disable' : 'Enable'} animations`}
      title={`${animationsEnabled ? 'Disable' : 'Enable'} animations`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Animation Icon */}
        <svg
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-500 ease-in-out
            ${animationsEnabled 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-0'
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>

        {/* Static Icon */}
        <svg
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-500 ease-in-out
            ${animationsEnabled 
              ? 'opacity-0 -rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
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
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </button>
  );
};

export default AnimationToggle;
