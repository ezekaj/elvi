import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  prefersReducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(() => {
    // Check localStorage first
    const savedPreference = localStorage.getItem('portfolio-animations-enabled');
    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }
    return true; // Default to enabled
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Save animation preference to localStorage
    localStorage.setItem('portfolio-animations-enabled', JSON.stringify(animationsEnabled));
  }, [animationsEnabled]);

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  const value: AnimationContextType = {
    animationsEnabled: animationsEnabled && !prefersReducedMotion,
    toggleAnimations,
    prefersReducedMotion
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
