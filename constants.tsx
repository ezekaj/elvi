import React from 'react';
import { WorkExperienceItem, EducationItem, Skill, ContactInfo, Project } from './types';

// SVG Icons (Heroicons - MIT License, and custom/modified)

export const BriefcaseIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M7.5 5.25A2.25 2.25 0 0 1 9.75 3h4.5a2.25 2.25 0 0 1 2.25 2.25v.75h-9v-.75Zm1.5 1.5V5.25c0-.414.336-.75.75-.75h4.5c.414 0 .75.336.75.75v1.5h.75a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h.75Z" clipRule="evenodd" />
    <path d="M8.25 8.25A.75.75 0 0 1 9 9v1.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm3.75 0a.75.75 0 0 1 .75.75V9v1.5a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 12 8.25Z" />
  </svg>
);

export const AcademicCapIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16.839 18 1.875 18H9.75v1.5H6.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-3V18h7.875c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.84 21.661 3 20.625 3H3.375Z" />
    <path fillRule="evenodd" d="M12 15.75L6.75 12l5.25-3.75 5.25 3.75L12 15.75Z" clipRule="evenodd" />
  </svg>
);

export const CodeBracketIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25h-3Zm-2.625 2.25c0-.966.784-1.75 1.75-1.75h4.75a1.75 1.75 0 0 1 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-4.75a1.75 1.75 0 0 1-1.75-1.75V6ZM9.75 12.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
);

export const LocationMarkerIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

export const MailIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

export const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 10.5V8.25a3 3 0 013-3h1.5V4.5z" clipRule="evenodd" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
  </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 0-1.06 1.06L10.939 5.5H7.5a.75.75 0 0 0 0 1.5h3.44l-1.28 1.28a.75.75 0 0 0 1.06 1.06l1.28-1.28V12a.75.75 0 0 0 1.5 0v-3.44l1.28 1.28a.75.75 0 1 0 1.06-1.06L13.061 7H16.5a.75.75 0 0 0 0-1.5h-3.44l1.28-1.28a.75.75 0 0 0-1.06-1.06L12 4.439V1.5a.75.75 0 0 0-1.5 0v2.94l-1.28-1.28Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.75 12.75a.75.75 0 0 0-1.5 0v2.94l-1.28-1.28a.75.75 0 0 0-1.06 1.06L10.939 17H7.5a.75.75 0 0 0 0 1.5h3.44l-1.28 1.28a.75.75 0 1 0 1.06 1.06l1.28-1.28V22.5a.75.75 0 0 0 1.5 0v-2.94l1.28 1.28a.75.75 0 1 0 1.06-1.06L13.061 19H16.5a.75.75 0 0 0 0-1.5h-3.44l1.28-1.28a.75.75 0 0 0-1.06-1.06L12 15.689v-2.94Z" clipRule="evenodd" />
  </svg>
);

export const GitHubIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={className || "w-6 h-6"}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

export const LinkedInIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={className || "w-6 h-6"}>
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.325 0-1.95.652-2.285 1.266h.015V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
  </svg>
);

export const DownloadIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

export const UserCircleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
  </svg>
);

export const FolderOpenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.172 3.36a2.25 2.25 0 0 0-1.591-.66H4.5a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h15Z" />
  </svg>
);


export const CONTACT_INFO: ContactInfo = {
  email: "elvizekaj02@gmail.com",
  phone: "(+355) 686407594",
  address: "Rruga \"Hamdi Sina\", Tirana, Albania", // This is not directly used in the new UI but kept for data completeness
  github: "https://github.com/ezekaj",
  linkedin: "https://www.linkedin.com/in/elvi-zekaj-240b10243/",
};

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: 'exp1',
    role: 'IT Specialist',
    company: 'InfoSoft Systems',
    period: '20/05/2024 – CURRENT',
    location: 'Tirana, Albania',
    responsibilities: [
      "Responsible for maintaining and optimizing an organization's IT infrastructure.",
      "Providing technical support to end-users, troubleshooting hardware and software issues.",
      "Maintain computer systems, networks, and other IT equipment."
    ],
    icon: <BriefcaseIcon />,
  },
  {
    id: 'exp2',
    role: 'IT (Junior)',
    company: 'One Albania',
    period: '01/05/2022 - 01/07/2023',
    location: 'Tirana, Albania',
    responsibilities: [
      "Maintenance of computers.",
      "Relations with suppliers.",
      "Responsible for installation, configuration, and maintaining computer systems, networks, and other IT equipment.",
      "Staying updated on emerging technologies and recommending innovative solutions to enhance operational efficiency."
    ],
    icon: <BriefcaseIcon />,
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'BSc of Software Development',
    institution: '42 Heilbronn gGmbH',
    period: '01/09/2023 - CURRENT',
    location: 'Germany',
    website: 'https://www.42heilbronn.de/',
    icon: <AcademicCapIcon />,
  },
  {
    id: 'edu2',
    degree: 'Professional Highschool "Hermann Gmeiner"',
    institution: '"Hermann Gmeiner"',
    period: '01/09/2019 – 01/06/2023',
    location: 'Tirana, Albania',
    icon: <AcademicCapIcon />,
  },
];

export const SKILLS_DATA: Skill[] = [
  { id: 'lang1', name: 'Albanian', level: 'Mother Tongue', category: 'language' },
  { id: 'lang2', name: 'English', level: 'C2 Proficient (Listening, Reading, Writing, Spoken Production & Interaction)', category: 'language' },
  { id: 'dig1', name: 'Microsoft Office Suite', category: 'digital' },
  { id: 'dig2', name: 'SQL & MS-SQL', category: 'digital' },
  { id: 'dig3', name: 'JavaScript (Node.js, Express.js)', category: 'digital' },
  { id: 'dig4', name: 'C, C++, C Programming', category: 'digital' },
  { id: 'dig5', name: 'Networking & IT Infrastructure', category: 'digital' },
  { id: 'dig6', name: 'Hardware/Software Troubleshooting', category: 'digital' },
  { id: 'other1', name: 'Driving Licence: B', category: 'other' },
  { id: 'other2', name: 'Problem Solving', category: 'other' },
  { id: 'other3', name: 'Team Collaboration', category: 'other' },
];


export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    name: 'Portfolio V2 (This Site!)',
    description: 'The interactive portfolio you are currently viewing, built with React, TypeScript, and TailwindCSS.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'UX/UI', 'Interactive Design'],
    status: 'live',
    icon: <SparklesIcon className="w-12 h-12 text-brand-accent"/>,
    projectUrl: 'https://github.com/ezekaj/elvi' // GitHub repository
  },
  {
    id: 'proj2',
    name: 'AI Content Generator',
    description: 'A web application planned to utilize Gemini API for generating creative text formats and exploring AI capabilities.',
    tags: ['Gemini API', 'Node.js', 'React', 'AI/ML'],
    status: 'soon',
    icon: <CodeBracketIcon className="w-12 h-12 text-brand-secondary-accent"/>,
    projectUrl: 'mailto:elvizekaj02@gmail.com?subject=AI Content Generator Project Inquiry&body=Hi, I am interested in learning more about your AI Content Generator project.'
  },
  {
    id: 'proj3',
    name: 'E-commerce Platform Module',
    description: 'Conceptualizing a specialized module for an e-commerce platform, focusing on backend logic and API design.',
    tags: ['Backend', 'API Design', 'Scalability', 'E-commerce'],
    status: 'in-progress',
    icon: <BriefcaseIcon className="w-12 h-12 text-yellow-400"/>,
    projectUrl: 'mailto:elvizekaj02@gmail.com?subject=E-commerce Platform Module Inquiry&body=Hi, I am interested in learning more about your E-commerce Platform Module project.'
  },
   {
    id: 'proj4',
    name: 'Interactive Learning Tool',
    description: 'Planning a gamified learning application to teach programming concepts in an engaging way.',
    tags: ['EdTech', 'React Native', 'Firebase', 'Gamification'],
    status: 'soon',
    icon: <AcademicCapIcon className="w-12 h-12 text-purple-400"/>,
    projectUrl: 'mailto:elvizekaj02@gmail.com?subject=Interactive Learning Tool Project Inquiry&body=Hi, I am interested in learning more about your Interactive Learning Tool project.'
  }
];