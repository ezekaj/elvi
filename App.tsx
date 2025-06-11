import React, { useState } from 'react';
import { CONTACT_INFO, WORK_EXPERIENCE, EDUCATION_HISTORY, SKILLS_DATA, PROJECTS_DATA, GitHubIcon, LinkedInIcon, ExternalLinkIcon, DownloadIcon, UserCircleIcon, BriefcaseIcon as ExperienceIcon, AcademicCapIcon as EducationIconConst, CodeBracketIcon as SkillsIconConst, FolderOpenIcon, PhoneIcon as ContactIconConst } from './constants';
import { WorkExperienceItem, EducationItem } from './types';
import InteractiveProject from './components/InteractiveProject';
import InteractiveDesk from './components/InteractiveDesk';
import FloatingParticles from './components/FloatingParticles';

const SectionTitle: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => (
  <h2 id={id} className="text-4xl font-bold mb-16 relative inline-block animate-fade-in-up">
    <span className="bg-gradient-to-r from-brand-accent via-brand-secondary-accent to-brand-accent bg-clip-text text-transparent animate-liquid-shimmer bg-[length:200%_100%]">
      {children}
    </span>
    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent rounded-full animate-glow-pulse"></div>
    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-brand-secondary-accent to-transparent rounded-full opacity-60"></div>
  </h2>
);

const TimelineItem: React.FC<{ item: WorkExperienceItem | EducationItem, isExperience?: boolean, animationDelay: string }> = ({ item, isExperience, animationDelay }) => (
  <div className="mb-10 flex animate-glass-morph group" style={{ animationDelay }}>
    <div className="flex flex-col items-center mr-8">
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl liquid-glass-interactive flex items-center justify-center text-brand-accent relative overflow-hidden group-hover:animate-micro-bounce">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-secondary-accent/20 rounded-2xl"></div>
        <div className="relative z-10 p-2">
          {item.icon}
        </div>
      </div>
      {/* Enhanced Animated Connector Line */}
      <div className="relative w-px h-full mt-4">
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-accent via-brand-secondary-accent to-transparent animate-grow-line origin-top"
          style={{ animationDelay: `calc(${animationDelay} + 0.3s)` }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-accent/50 to-transparent blur-sm animate-grow-line origin-top"
          style={{ animationDelay: `calc(${animationDelay} + 0.3s)` }}
        ></div>
      </div>
    </div>
    <div className="liquid-glass-card p-8 rounded-2xl w-full group-hover:liquid-glass-interactive transition-all duration-500 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-brand-light mb-2 group-hover:bg-gradient-to-r group-hover:from-brand-accent group-hover:to-brand-secondary-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {isExperience ? (item as WorkExperienceItem).role : (item as EducationItem).degree}
        </h3>
        <p className="text-brand-secondary-accent font-semibold mb-2 text-lg">{isExperience ? (item as WorkExperienceItem).company : (item as EducationItem).institution}</p>
        <p className="text-sm text-slate-300 mb-3 font-medium">{item.period} | {item.location}</p>
        {isExperience && (
          <ul className="list-none text-slate-300 space-y-2 mt-4">
            {(item as WorkExperienceItem).responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-gradient-to-r from-brand-accent to-brand-secondary-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        )}
        {(item as EducationItem).website && (
          <a
            href={(item as EducationItem).website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold mt-4 px-4 py-2 rounded-lg liquid-glass hover:liquid-glass-interactive transition-all duration-300 group/link"
          >
            <span className="bg-gradient-to-r from-brand-accent to-brand-secondary-accent bg-clip-text text-transparent">
              Visit Website
            </span>
            <ExternalLinkIcon className="ml-2 w-4 h-4 text-brand-accent group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        )}
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
    </div>
  </div>
);


const App: React.FC = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const aboutMeText = "Z.E Digital Systems specializes in innovative technology solutions, combining strong problem-solving capabilities with cutting-edge digital expertise. We deliver comprehensive IT services, software development, and digital transformation solutions. Our commitment to excellence and continuous innovation drives successful outcomes for businesses seeking reliable technology partnerships.";

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
    { id: 'desk-cv', label: 'Download CV', icon: <DownloadIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => {
      // Check if CV file exists, otherwise show contact info
      const cvUrl = '/ZE_Digital_Systems_CV.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'ZE_Digital_Systems_CV.pdf';
      link.onerror = () => {
        alert('CV download will be available soon. Please contact us at elvizekaj02@gmail.com for more information.');
      };
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } },
    { id: 'desk-experience', label: 'Experience', icon: <ExperienceIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('experience') },
    { id: 'desk-education', label: 'Education', icon: <EducationIconConst className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('education') },
    { id: 'desk-skills', label: 'Skills', icon: <SkillsIconConst className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('skills') },
    { id: 'desk-projects', label: 'Projects', icon: <FolderOpenIcon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('projects') },
    { id: 'desk-contact', label: 'Contact', icon: <ContactIconConst className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />, action: () => scrollToSection('contact') },
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark relative">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Enhanced Liquid Glass Header */}
      <header ref={headerRef} className="liquid-glass-header py-6 px-4 sm:px-8 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0 animate-slide-in-left">
            <div className={`flex items-center justify-center sm:justify-start mb-2 ${logoLoaded ? '' : 'justify-center sm:justify-start'}`}>
              {logoLoaded && (
                <img
                  src="/assets/images/Zekaj.png"
                  alt="Zekaj Technologies Logo - Modern dotted sphere design representing innovation and technology solutions"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-glass-morph hover:animate-micro-bounce transition-transform duration-300 mr-4 border-0 outline-none"
                  style={{
                    animationDelay: '50ms',
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none'
                  }}
                  onError={() => setLogoLoaded(false)}
                />
              )}
              <h1 className="text-3xl font-extrabold text-brand-light bg-gradient-to-r from-brand-light via-brand-accent to-brand-secondary-accent bg-clip-text text-transparent animate-liquid-shimmer bg-[length:200%_100%]">
                Z.E Digital Systems
              </h1>
            </div>
          </div>
          <div className="flex space-x-5 animate-slide-in-right">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-slate-400 hover:text-brand-accent transition-all duration-300 micro-bounce micro-glow p-2 rounded-lg"
            >
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-slate-400 hover:text-brand-accent transition-all duration-300 micro-bounce micro-glow p-2 rounded-lg"
            >
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
          <div className="liquid-glass-card p-10 rounded-3xl relative overflow-hidden group">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:gap-8">
              {/* Profile Image Container */}
              <div className="relative flex-shrink-0 mb-8 lg:mb-0 mx-auto lg:mx-0">
                <img
                  src="/assets/images/IMG_2898.png"
                  alt="Elvi Zekaj - Professional portrait"
                  className="w-40 h-40 rounded-3xl border-4 border-transparent bg-gradient-to-br from-brand-accent to-brand-secondary-accent p-1 shadow-2xl animate-glass-morph hover:animate-micro-bounce transition-transform duration-300 object-cover"
                  style={{animationDelay: '100ms'}}
                />
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-brand-accent/20 to-brand-secondary-accent/20 blur-xl absolute top-0 left-0 opacity-60 animate-glow-pulse -z-10"></div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p
                  className="text-xl text-slate-200 leading-relaxed animate-glass-morph font-medium"
                  style={{animationDelay: '200ms'}}
                >
                  {aboutMeText}
                </p>
              </div>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SKILLS_DATA.map((skill, index) => (
              <div
                key={skill.id}
                className="liquid-glass-card p-6 rounded-2xl group hover:liquid-glass-interactive transition-all duration-500 relative overflow-hidden animate-glass-morph"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Category indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-accent to-brand-secondary-accent animate-glow-pulse"></div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{skill.category}</span>
                  </div>

                  <h4 className="font-bold text-brand-light text-lg mb-2 group-hover:bg-gradient-to-r group-hover:from-brand-accent group-hover:to-brand-secondary-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {skill.name}
                  </h4>

                  {skill.level && (
                    <p className="text-sm text-brand-secondary-accent font-medium leading-relaxed">
                      {skill.level}
                    </p>
                  )}

                  {/* Skill level indicator bar */}
                  <div className="mt-4 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-secondary-accent rounded-full animate-liquid-shimmer bg-[length:200%_100%]"
                      style={{
                        width: skill.level ? '90%' : '75%',
                        animationDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
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
          <div className="liquid-glass-card p-12 rounded-3xl text-center animate-glass-morph group relative overflow-hidden" style={{animationDelay: '100ms'}}>
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-secondary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10">
              <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
                Feel free to reach out via email or connect with me on LinkedIn.
              </p>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="liquid-glass-interactive px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center group/button relative overflow-hidden"
              >
                {/* Button gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-secondary-accent opacity-20 group-hover/button:opacity-30 transition-opacity duration-300 rounded-2xl"></div>

                <span className="relative z-10 bg-gradient-to-r from-brand-accent to-brand-secondary-accent bg-clip-text text-transparent group-hover/button:from-brand-secondary-accent group-hover/button:to-brand-accent transition-all duration-300">
                  Say Hello
                </span>

                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-secondary-accent opacity-0 group-hover/button:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl"></div>

                {/* Button shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700 ease-out"></div>
              </a>
            </div>

            {/* Section shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>
        </section>

        <footer className="text-center py-10 text-slate-500 border-t border-slate-600 mt-16">
          <p>&copy; {new Date().getFullYear()} Z.E Digital Systems. All rights reserved.</p>
          <p className="text-sm">Crafted with React, TypeScript, and Tailwind CSS. Powered by innovation.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;