export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  name: string;
  description: string;
  imageUrl: string;
}

export interface PageContent {
  title: string;
  description: string;
  heroImage?: string;
  ctaText?: string;
  ctaLink?: string;
}