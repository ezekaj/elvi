export const themeConfig = {
  light: {
    // Backgrounds
    primary: '#f7f9fb',      // Main background
    secondary: '#f3f4f6',    // Alternative background
    surface: '#e5e7eb',      // Card/surface background
    surfaceAlt: '#d1d5db',   // Alternative surface
    
    // Text colors
    textPrimary: '#1e293b',   // Primary text (dark gray)
    textSecondary: '#64748b', // Secondary text (medium gray)
    textTertiary: '#94a3b8',  // Tertiary text (light gray)
    textInverse: '#ffffff',   // White text for dark backgrounds
    
    // Accent colors (cyan/blue family)
    accent: '#38bdf8',        // Primary accent (light cyan)
    accentHover: '#0ea5e9',   // Accent hover state
    accentMuted: '#0284c7',   // Muted accent
    
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Borders and glass effects
    border: '#e0e7ef',        // Standard borders
    borderMuted: '#f1f5f9',   // Muted borders
    glass: 'rgba(255, 255, 255, 0.6)', // Glass effect
    glassBorder: 'rgba(255, 255, 255, 0.8)',
    
    // Shadows
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowMuted: 'rgba(0, 0, 0, 0.05)',
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    gradientSecondary: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
  },
  
  dark: {
    // Backgrounds
    primary: '#0f172a',       // Main background (slate-900)
    secondary: '#1e293b',     // Alternative background (slate-800)
    surface: '#334155',       // Card/surface background (slate-700)
    surfaceAlt: '#475569',    // Alternative surface (slate-600)
    
    // Text colors
    textPrimary: '#e2e8f0',   // Primary text (slate-200)
    textSecondary: '#cbd5e0', // Secondary text (slate-300)
    textTertiary: '#94a3b8',  // Tertiary text (slate-400)
    textInverse: '#1e293b',   // Dark text for light backgrounds
    
    // Accent colors
    accent: '#22d3ee',        // Primary accent (cyan-400)
    accentHover: '#06b6d4',   // Accent hover state (cyan-500)
    accentMuted: '#0891b2',   // Muted accent (cyan-600)
    
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Borders and glass effects
    border: '#475569',        // Standard borders (slate-600)
    borderMuted: '#334155',   // Muted borders (slate-700)
    glass: 'rgba(15, 23, 42, 0.8)', // Glass effect
    glassBorder: 'rgba(71, 85, 105, 0.5)',
    
    // Shadows
    shadow: 'rgba(0, 0, 0, 0.3)',
    shadowMuted: 'rgba(0, 0, 0, 0.2)',
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  }
};

export type ThemeColors = typeof themeConfig.light;
