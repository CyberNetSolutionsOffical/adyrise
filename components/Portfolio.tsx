import React from 'react';
import type { PortfolioItem } from '../types';
import useIntersectionObserver from './useIntersectionObserver';

const portfolioData: PortfolioItem[] = [
  {
    image: 'https://picsum.photos/seed/portfolio1/500/300',
    title: 'E-commerce Chatbot for a Retail Brand',
    problem: 'High volume of customer queries was overwhelming the support team, leading to slow response times.',
    solution: 'Developed and deployed an AI-powered chatbot on their website and Facebook page to handle common queries.',
    result: 'Reduced support ticket volume by 60% and increased customer satisfaction by 25%.',
  },
  {
    image: 'https://picsum.photos/seed/portfolio2/500/300',
    title: 'Automated Social Media for a Tourism Agency',
    problem: 'The marketing team spent hours manually scheduling posts across multiple platforms.',
    solution: 'Implemented an AI system to generate and schedule engaging travel content based on trends.',
    result: 'Saved 15+ hours per week for the marketing team and boosted social media engagement by 40%.',
  },
  {
    image: 'https://picsum.photos/seed/portfolio3/500/300',
    title: 'Invoice Processing for a Manufacturing Firm',
    problem: 'Manual data entry from invoices was slow, expensive, and prone to errors.',
    solution: 'Automated the entire invoice processing workflow using AI-powered OCR and data extraction.',
    result: 'Achieved 99% data accuracy and reduced processing time from days to minutes.',
  },
];

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
    // FIX: Specify HTMLDivElement as the generic type for useIntersectionObserver to match the 'div' tag ref.
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const delay = `delay-${index * 100}`;
    return (
        <div ref={ref} className={`bg-secondary rounded-lg overflow-hidden shadow-lg group fade-in-up ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-light mb-2"><strong className="text-accent">Problem:</strong> {item.problem}</p>
                <p className="text-sm text-light mb-2"><strong className="text-accent">Solution:</strong> {item.solution}</p>
                <p className="text-sm font-bold text-highlight"><strong className="text-accent">Result:</strong> {item.result}</p>
            </div>
        </div>
    );
};


const Portfolio: React.FC = () => {
  // FIX: Specify HTMLElement as the generic type for useIntersectionObserver to match the 'section' tag ref.
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  return (
    <section id="portfolio" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Success Stories</h2>
          <p className="text-accent mt-4 text-lg">See how we've helped businesses like yours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;