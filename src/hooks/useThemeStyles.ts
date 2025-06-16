import { useTheme } from '../contexts/ThemeContext';
import { themeConfig } from '../config/theme';

export const useThemeStyles = () => {
  const { theme, isDark, isLight } = useTheme();
  const colors = themeConfig[theme];

  // Base component styles
  const styles = {
    // Page backgrounds
    pageBackground: isDark ? 'bg-slate-900' : 'bg-gray-50',
    sectionBackground: isDark ? 'bg-slate-800/50' : 'bg-white/50',
    
    // Card/Surface styles
    card: isDark 
      ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700' 
      : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm',
    
    cardHover: isDark
      ? 'hover:bg-slate-700/80 hover:border-slate-600'
      : 'hover:bg-white/90 hover:border-gray-300 hover:shadow-md',
    
    // Text styles
    textPrimary: isDark ? 'text-slate-200' : 'text-slate-800',
    textSecondary: isDark ? 'text-slate-300' : 'text-slate-600',
    textTertiary: isDark ? 'text-slate-400' : 'text-slate-500',
    textMuted: isDark ? 'text-slate-500' : 'text-slate-400',
    
    // Accent colors
    accent: isDark ? 'text-cyan-400' : 'text-blue-600',
    accentHover: isDark ? 'hover:text-cyan-300' : 'hover:text-blue-700',
    accentBg: isDark ? 'bg-cyan-400/10' : 'bg-blue-50',
    
    // Button styles
    buttonPrimary: isDark
      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400',
    
    buttonSecondary: isDark
      ? 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
      : 'border border-blue-500/50 text-blue-600 hover:bg-blue-50',
    
    // Navigation styles
    navBackground: isDark 
      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-700' 
      : 'bg-white/90 backdrop-blur-xl border-gray-200',
    
    navItem: isDark ? 'text-slate-400' : 'text-slate-600',
    navItemActive: isDark ? 'text-cyan-400 bg-cyan-400/10' : 'text-blue-600 bg-blue-50',
    navItemHover: isDark ? 'hover:text-cyan-400 hover:bg-cyan-400/5' : 'hover:text-blue-600 hover:bg-blue-50',
    
    // Header styles
    headerBackground: isDark ? 'bg-slate-800' : 'bg-white',
    headerBorder: isDark ? 'border-slate-700' : 'border-gray-200',
    
    // Form styles
    input: isDark
      ? 'bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20'
      : 'bg-white border-gray-300 text-slate-800 placeholder-slate-400 focus:border-blue-400 focus:ring-blue-400/20',
    
    // Status colors (theme-aware)
    success: isDark ? 'text-green-400' : 'text-green-600',
    warning: isDark ? 'text-yellow-400' : 'text-yellow-600',
    error: isDark ? 'text-red-400' : 'text-red-600',
    info: isDark ? 'text-blue-400' : 'text-blue-600',
    
    // Progress bars and indicators
    progressBg: isDark ? 'bg-slate-700' : 'bg-gray-200',
    progressFill: isDark 
      ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
      : 'bg-gradient-to-r from-blue-500 to-purple-500',
  };

  // Skill category colors (theme-aware)
  const getSkillColors = (color: string) => {
    const colorMap = {
      cyan: {
        bg: isDark ? 'bg-cyan-500/20' : 'bg-cyan-50',
        text: isDark ? 'text-cyan-400' : 'text-cyan-700',
        border: isDark ? 'border-cyan-500/30' : 'border-cyan-200',
        progress: isDark ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' : 'bg-gradient-to-r from-cyan-400 to-cyan-500'
      },
      purple: {
        bg: isDark ? 'bg-purple-500/20' : 'bg-purple-50',
        text: isDark ? 'text-purple-400' : 'text-purple-700',
        border: isDark ? 'border-purple-500/30' : 'border-purple-200',
        progress: isDark ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-purple-400 to-purple-500'
      },
      green: {
        bg: isDark ? 'bg-green-500/20' : 'bg-green-50',
        text: isDark ? 'text-green-400' : 'text-green-700',
        border: isDark ? 'border-green-500/30' : 'border-green-200',
        progress: isDark ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-green-400 to-green-500'
      },
      yellow: {
        bg: isDark ? 'bg-yellow-500/20' : 'bg-yellow-50',
        text: isDark ? 'text-yellow-400' : 'text-yellow-700',
        border: isDark ? 'border-yellow-500/30' : 'border-yellow-200',
        progress: isDark ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 'bg-gradient-to-r from-yellow-400 to-yellow-500'
      },
      blue: {
        bg: isDark ? 'bg-blue-500/20' : 'bg-blue-50',
        text: isDark ? 'text-blue-400' : 'text-blue-700',
        border: isDark ? 'border-blue-500/30' : 'border-blue-200',
        progress: isDark ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-blue-400 to-blue-500'
      },
      indigo: {
        bg: isDark ? 'bg-indigo-500/20' : 'bg-indigo-50',
        text: isDark ? 'text-indigo-400' : 'text-indigo-700',
        border: isDark ? 'border-indigo-500/30' : 'border-indigo-200',
        progress: isDark ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' : 'bg-gradient-to-r from-indigo-400 to-indigo-500'
      }
    };
    
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return {
    ...styles,
    colors,
    theme,
    isDark,
    isLight,
    getSkillColors
  };
};
