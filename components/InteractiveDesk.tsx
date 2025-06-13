import React from 'react';

export interface DeskItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  className?: string; 
}

interface InteractiveDeskProps {
  items: DeskItemProps[];
}

const InteractiveDesk: React.FC<InteractiveDeskProps> = ({ items }) => {
  return (
    <section
      aria-label="Interactive Desk Navigation"
      className="relative bg-gradient-to-br from-desk-surface via-brand-dark-secondary to-desk-surface py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Floating particles background */}
      <div className="floating-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/30 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 micro-stagger">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={item.action}
              aria-label={`Go to ${item.label}`}
              className={`
                group liquid-glass-interactive micro-button micro-card
                text-brand-light p-5 rounded-2xl
                focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-75
                flex flex-col items-center justify-center text-center
                h-40 sm:h-44 relative overflow-hidden
                animate-glass-morph
                ${item.className || ''}
              `}
              style={{
                animationDelay: `${index * 150}ms`,
                '--stagger-index': index
              } as React.CSSProperties}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-secondary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon container with enhanced effects */}
              <div className="mb-3 flex-shrink-0 relative z-10 micro-icon bounce transition-transform duration-300">
                <div className="p-2 rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-secondary-accent/20 group-hover:from-brand-accent/30 group-hover:to-brand-secondary-accent/30 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Enhanced label with gradient text */}
              <span className="font-semibold text-sm sm:text-base leading-tight relative z-10 group-hover:bg-gradient-to-r group-hover:from-brand-accent group-hover:to-brand-secondary-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {item.label}
              </span>

              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDesk;