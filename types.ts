import type { ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: string;
}

export interface UseCase {
  title: string;
  description: string;
  youtubeUrl: string;
  icon: ReactNode;
}

export interface PortfolioItem {
  image: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface BlogPost {
  image: string;
  category: string;
  title: string;
  excerpt: string;
}
