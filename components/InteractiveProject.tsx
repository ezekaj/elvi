
import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from '../constants';

interface InteractiveProjectProps {
  project: Project;
}

const InteractiveProject: React.FC<InteractiveProjectProps> = ({ project }) => {
  const statusColors = {
    soon: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
    'in-progress': 'bg-gradient-to-r from-blue-400 to-purple-500 text-white',
    live: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
  };

  return (
    <a
      href={project.projectUrl || '#'}
      target={project.projectUrl && project.projectUrl.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="relative group liquid-glass-card p-8 rounded-3xl flex flex-col items-center text-center animate-glass-morph overflow-hidden"
      style={{animationDelay: `${parseInt(project.id.slice(-1)) * 200}ms`}}
    >
      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-accent via-brand-secondary-accent to-brand-accent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

      {/* Status badge with enhanced styling */}
      {(project.status === 'soon' || project.status === 'in-progress') && (
        <div className={`absolute top-4 right-4 px-4 py-2 text-xs font-bold ${statusColors[project.status]} rounded-full shadow-lg backdrop-blur-sm animate-glow-pulse`}>
          {project.status === 'soon' ? 'COMING SOON' : 'IN PROGRESS'}
        </div>
      )}

      {project.status === 'live' && (
        <div className={`absolute top-4 right-4 px-4 py-2 text-xs font-bold ${statusColors[project.status]} rounded-full shadow-lg backdrop-blur-sm animate-glow-pulse`}>
          LIVE
        </div>
      )}

      {/* Enhanced icon container */}
      <div className="mb-6 relative z-10 group-hover:animate-micro-bounce">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-secondary-accent/20 group-hover:from-brand-accent/30 group-hover:to-brand-secondary-accent/30 transition-all duration-500 shadow-lg">
          {project.icon || <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary-accent rounded-xl"></div>}
        </div>

        {/* Icon glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-secondary-accent/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* Enhanced title with gradient text */}
      <h3 className="text-xl font-bold text-brand-light mb-3 relative z-10 group-hover:bg-gradient-to-r group-hover:from-brand-accent group-hover:to-brand-secondary-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {project.name}
      </h3>

      {/* Enhanced description */}
      <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-300">
        {project.description}
      </p>

      {/* Enhanced tags with glassmorphism */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
        {project.tags.map((tag, index) => (
          <span
            key={tag}
            className="text-xs liquid-glass px-3 py-2 rounded-full text-brand-accent font-medium backdrop-blur-sm border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300"
            style={{animationDelay: `${index * 100}ms`}}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Enhanced CTA with micro-interactions */}
      <div className="mt-auto text-sm font-semibold relative z-10 flex items-center group-hover:animate-micro-bounce">
        <span className="bg-gradient-to-r from-brand-accent to-brand-secondary-accent bg-clip-text text-transparent group-hover:from-brand-secondary-accent group-hover:to-brand-accent transition-all duration-300">
          {project.projectUrl && project.projectUrl.startsWith('http') ? 'View Project' : 'Learn More'}
        </span>
        <ExternalLinkIcon className="w-4 h-4 ml-2 text-brand-accent group-hover:text-brand-secondary-accent group-hover:translate-x-1 transition-all duration-300" />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </a>
  );
};

export default InteractiveProject;
