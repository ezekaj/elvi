
import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from '../constants';

interface InteractiveProjectProps {
  project: Project;
}

const InteractiveProject: React.FC<InteractiveProjectProps> = ({ project }) => {
  const statusColors = {
    soon: 'bg-yellow-500 text-yellow-900',
    'in-progress': 'bg-blue-500 text-blue-900',
    live: 'bg-green-500 text-green-900',
  };

  return (
    <a 
      href={project.projectUrl || '#'} 
      target={project.projectUrl && project.projectUrl.startsWith('http') ? '_blank' : '_self'} 
      rel="noopener noreferrer"
      className="relative group bg-brand-dark-secondary p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-center text-center animate-fade-in-up"
      style={{animationDelay: `${parseInt(project.id.slice(-1)) * 100}ms`}} // Staggered animation
    >
      {project.status === 'soon' && (
        <div className={`absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 text-xs font-bold ${statusColors[project.status]} rounded-full shadow-md`}>
          SOON
        </div>
      )}
       {project.status === 'in-progress' && (
        <div className={`absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 text-xs font-bold ${statusColors[project.status]} rounded-full shadow-md`}>
          IN PROGRESS
        </div>
      )}

      <div className="mb-4">
        {project.icon || <div className="w-12 h-12 bg-brand-accent rounded-full"></div>}
      </div>
      
      <h3 className="text-xl font-semibold text-brand-light mb-2">{project.name}</h3>
      <p className="text-slate-400 text-sm mb-3 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs bg-slate-700 text-brand-accent px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-auto text-sm text-brand-accent group-hover:text-brand-accent-hover transition-colors duration-200 flex items-center">
        {project.projectUrl && project.projectUrl.startsWith('http') ? 'View Project' : 'Learn More'}
        <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
      </div>
    </a>
  );
};

export default InteractiveProject;
