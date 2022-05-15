import { ReactNode } from "react";

export interface NavItemProps {
  title: string;
  href: string;
}

export interface NavListProps {
  items: NavItemProps[];
}

export interface RegisterProps {
  username: string;
  email: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface UserProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  name: string;
  job_title: string;
  website: string;
  phone: string;
  birthday: string;
  about: string;
  city: { key: string; label: string };
  gender: { key: string; label: string };
  marital: { key: string; label: string };
  skills: string[];
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter: string;
  };
  resumes: ResumeProps[];
  languages: LanguageProps[];
  educations: EducationProps[];
}

export interface ResumeProps {
  name: string;
  year: string;
}

export interface LanguageProps {
  key: string;
  label: string;
  level: string;
}

export interface EducationProps {
  name: string;
  year: string;
}

export interface SelectItemProps {
  key: string;
  label: string;
}

export interface SelectProps {
  options?: SelectItemProps[];
  onSelectHandler?: any;
  selected?: SelectItemProps;
}

export interface LayoutProps {
  children: ReactNode
}