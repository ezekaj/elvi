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
      className="bg-desk-surface py-10 px-4 sm:px-6 lg:px-8 shadow-inner"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-5">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={item.action}
              aria-label={`Go to ${item.label}`}
              className={`
                group 
                bg-slate-800/30 backdrop-blur-lg border border-slate-700/60 
                text-brand-light p-4 rounded-lg shadow-lg 
                hover:bg-slate-700/50 hover:border-slate-500/80 
                hover:shadow-brand-accent/30
                focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-75
                transform hover:-translate-y-1.5 
                transition-all duration-300 ease-in-out
                flex flex-col items-center justify-center text-center
                h-36 sm:h-40  
                animate-fade-in-up
                hover:animate-subtle-pulse 
                ${item.className || ''}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 flex-shrink-0">{item.icon}</div>
              <span className="font-semibold text-sm sm:text-base leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDesk;