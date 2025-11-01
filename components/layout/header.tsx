'use client';

import { LanguageSwitcher } from './language-switcher';

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'impact', label: 'Impact' },
    { id: 'team', label: 'Team' },
    { id: 'connect', label: 'Connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-tech-grey-200 bg-tech-white/80 backdrop-blur-md">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo - Minimal */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-light tracking-tight text-tech-dark hover:text-blue-primary transition-colors"
        >
          Z.E DIGITAL TECH
        </button>

        {/* Desktop Navigation - Minimal Text Links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-light text-tech-grey-500 hover:text-blue-primary transition-colors uppercase tracking-wider"
            >
              {section.label}
            </button>
          ))}
          <div className="w-px h-6 bg-tech-grey-200" />
          <LanguageSwitcher />
        </div>

        {/* Mobile - Just Language Switcher */}
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
