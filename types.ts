
export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  icon?: React.ReactNode;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  website?: string;
  icon?: React.ReactNode;
}

export interface Skill {
  id: string;
  name: string;
  level?: string; // For languages
  category: 'language' | 'digital' | 'other';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  tags: string[];
  status: 'live' | 'soon' | 'in-progress';
  icon?: React.ReactNode;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
}
