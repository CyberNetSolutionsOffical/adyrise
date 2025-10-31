
import React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
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

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}

export interface BlogPost {
    image: string;
    category: string;
    title: string;
    excerpt: string;
}
