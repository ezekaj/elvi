import React from 'react';
import { CONTACT_INFO, WORK_EXPERIENCE, EDUCATION_HISTORY, SKILLS_DATA, PROJECTS_DATA, GitHubIcon, LinkedInIcon, ExternalLinkIcon, DownloadIcon, UserCircleIcon, BriefcaseIcon as ExperienceIcon, AcademicCapIcon as EducationIconConst, CodeBracketIcon as SkillsIconConst, FolderOpenIcon, PhoneIcon as ContactIconConst } from './constants';
import { WorkExperienceItem, EducationItem } from './types';
import InteractiveProject from './components/InteractiveProject';
import InteractiveDesk from './components/InteractiveDesk';

const SectionTitle: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => (
  <h2 id={id} className="text-3xl font-bold text-brand-accent mb-12 relative inline-block"> {/* Increased mb for more space */}
    {children}
    <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-1/4 h-[3px] bg-brand-secondary-accent rounded-full"></span>
  </h2>
);

const TimelineItem: React.FC<{ item: WorkExperienceItem | EducationItem, isExperience?: boolean, animationDelay: string }> = ({ item, isExperience, animationDelay }) => (
  <div className="mb-8 flex animate-fade-in-up" style={{ animationDelay }}>
    <div className="flex flex-col items-center mr-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-dark-secondary border-2 border-brand-accent flex items-center justify-center text-brand-accent">
        {item.icon}
      </div>
      {/* Animated Connector Line */}
      <div 
        className="w-px h-full bg-slate-600 animate-grow-line origin-top"
        style={{ animationDelay: `calc(${animationDelay} + 0.2s)` }} // Delay line animation slightly after item fades in
      ></div>
    </div>
    <div className="bg-brand-dark-secondary p-6 rounded-lg shadow-lg w-full">
      <h3 className="text-xl font-semibold text-brand-light mb-1">{isExperience ? (item as WorkExperienceItem).role : (item as EducationItem).degree}</h3>
      <p className="text-brand-secondary-accent font-medium mb-1">{isExperience ? (item as WorkExperienceItem).company : (item as EducationItem).institution}</p>
      <p className="text-sm text-slate-400 mb-1">{item.period} | {item.location}</p>
      {isExperience && (
        <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2">
          {(item as WorkExperienceItem).responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      )}
      {(item as EducationItem).website && (
        <a 
          href={(item as EducationItem).website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm text-brand-accent hover:text-brand-accent-hover mt-2"
        >
          Visit Website <ExternalLinkIcon className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  </div>
);


const App: React.FC = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const aboutMeText = "Strong problem-solving skills, enabling me to navigate challenges with resilience and creativity. Highly organized and detail-oriented, with a commitment to delivering results. Dedicated to self-improvement and contributing to the success of the team.";

  const getHeaderHeight = () => {
    return headerRef.current ? headerRef.current.offsetHeight : 0;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = getHeaderHeight();
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const deskItems = [
    { id: 'desk-about', label: 'About Me', icon: <UserCircleIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('about') },
    { id: 'desk-cv', label: 'Download CV', icon: <DownloadIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => { window.open('/Elvi_Zekaj_CV.pdf', '_blank'); } },
    { id: 'desk-experience', label: 'Experience', icon: <ExperienceIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('experience') },
    { id: 'desk-education', label: 'Education', icon: <EducationIconConst className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('education') },
    { id: 'desk-skills', label: 'Skills', icon: <SkillsIconConst className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('skills') },
    { id: 'desk-projects', label: 'Projects', icon: <FolderOpenIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('projects') },
    { id: 'desk-contact', label: 'Contact', icon: <ContactIconConst className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('contact') },
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      {/* Header */}
      <header ref={headerRef} className="py-6 px-4 sm:px-8 bg-brand-dark-secondary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-3xl font-extrabold text-brand-light">Elvi Zekaj</h1>
            <p className="text-lg text-brand-accent">IT Specialist & Software Developer</p>
          </div>
          <div className="flex space-x-5">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-slate-400 hover:text-brand-accent transition-colors">
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-slate-400 hover:text-brand-accent transition-colors">
              <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </header>

      {/* Interactive Desk Area */}
      <InteractiveDesk items={deskItems} />

      {/* Main Content Sections */}
      <main className="container mx-auto p-4 sm:p-8 space-y-16 flex-grow">
        <section id="about">
          <SectionTitle id="about-title">About Me</SectionTitle>
          <div className="bg-brand-dark-secondary p-6 rounded-lg shadow-xl">
            <img 
              src="https://picsum.photos/seed/elvi_zekaj_profile/150/150" 
              alt="Elvi Zekaj" 
              className="w-32 h-32 rounded-full border-4 border-brand-accent shadow-lg mb-6 float-right ml-6 animate-fade-in-up"
              style={{animationDelay: '100ms'}}
            />
            <p 
              className="text-lg text-slate-300 leading-relaxed clear-left animate-fade-in-up"
              style={{animationDelay: '200ms'}}
            >
              {aboutMeText}
            </p>
          </div>
        </section>

        <section id="experience">
          <SectionTitle id="experience-title">Work Experience</SectionTitle>
          <div className="relative">
            {WORK_EXPERIENCE.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                isExperience={true} 
                animationDelay={`${index * 150}ms`} // Slightly increased stagger
              />
            ))}
          </div>
        </section>

        <section id="education">
          <SectionTitle id="education-title">Education & Training</SectionTitle>
          <div className="relative">
            {EDUCATION_HISTORY.map((item, index) => (
               <TimelineItem 
                key={item.id} 
                item={item} 
                animationDelay={`${index * 150}ms`} // Slightly increased stagger
              />
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionTitle id="skills-title">Skills</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skill, index) => (
              <div 
                key={skill.id} 
                className="bg-brand-dark-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }} // Adjusted stagger
              >
                <h4 className="font-semibold text-brand-light text-lg">{skill.name}</h4>
                {skill.level && <p className="text-sm text-brand-accent">{skill.level}</p>}
                <p className="text-xs text-slate-500 capitalize mt-1">{skill.category}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section id="projects">
          <SectionTitle id="projects-title">My Projects</SectionTitle>
          <p 
            className="text-slate-300 mb-8 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Here are some of the projects I'm currently working on or planning. Click to learn more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map(project => (
              <InteractiveProject key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionTitle id="contact-title">Get In Touch</SectionTitle>
          <div className="bg-brand-dark-secondary p-8 rounded-lg shadow-xl text-center animate-fade-in-up" style={{animationDelay: '100ms'}}>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              Feel free to reach out via email or connect with me on LinkedIn.
            </p>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-gradient-to-r from-brand-secondary-accent to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block text-lg"
            >
              Say Hello
            </a>
          </div>
        </section>

        <footer className="text-center py-10 text-slate-500 border-t border-slate-600 mt-16">
          <p>&copy; {new Date().getFullYear()} Elvi Zekaj. All rights reserved.</p>
          <p className="text-sm">Crafted with React, TypeScript, and Tailwind CSS. Inspired by creativity.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;