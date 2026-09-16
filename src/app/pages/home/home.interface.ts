export interface NavItem {
  label: string;
  link: string;
  isExternal?: boolean;
}

export interface Slide {
  id: number;
  imageUrl: string;
  altText: string;
}

export interface Feature {
  iconUrl: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface EducationalPillar {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconUrl: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mailtoUrl: string;
}