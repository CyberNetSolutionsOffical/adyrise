import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import type { UseCase } from '../types';

const useCasesData: UseCase[] = [
  {
    title: 'AI-Powered Customer Support',
    description: 'Automate responses to common customer questions 24/7, freeing up your support team for complex issues.',
    youtubeUrl: 'https://www.youtube.com/@NepGrowYt',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    ),
  },
  {
    title: 'Automated Lead Nurturing',
    description: 'Automatically follow up with leads, send personalized emails, and score them based on engagement.',
    youtubeUrl: 'https://www.youtube.com/@NepGrowYt',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19h18M12 14l-4-3-4 3" /></svg>
    ),
  },
  {
    title: 'Invoice & Receipt Processing',
    description: 'Extract data from invoices and receipts automatically, eliminating manual data entry and reducing errors.',
    youtubeUrl: 'https://www.youtube.com/@NepGrowYt',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
  },
  {
    title: 'Social Media Automation',
    description: 'Schedule posts, analyze performance, and engage with your audience across all platforms automatically.',
    youtubeUrl: 'https://www.youtube.com/@NepGrowYt',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
    ),
  },
  {
    title: 'Employee Onboarding',
    description: 'Automate the entire onboarding process, from sending welcome emails to scheduling training sessions.',
    youtubeUrl: 'https://www.youtube.com/@NepGrowYt',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ),
  },
  {
    title: 'Competitor Analysis Reports',
    description: 'Automatically gather data on competitors, analyze their strategies, and generate insightful reports.',
    youtubeUrl: 'https://www.youtube.com/@NepGrowYt',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
];

const UseCaseCard = ({ useCase, index }: { useCase: UseCase; index: number }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.1 });
    const delay = `delay-${index * 100}`;
  
    return (
      <a
        href={useCase.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className={`bg-white dark:bg-primary p-8 rounded-lg shadow-lg text-left transition-all duration-300 hover:shadow-highlight/20 hover:scale-105 group fade-in-up flex flex-col ${delay} ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-highlight inline-block p-4 bg-gray-100 dark:bg-secondary rounded-full mb-6">
          {useCase.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{useCase.title}</h3>
        <p className="text-gray-700 dark:text-light mb-6 flex-grow">{useCase.description}</p>
        <div className="font-bold text-highlight group-hover:underline flex items-center mt-auto">
          Watch Demo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
      </a>
    );
};
  
const UseCases: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
    
    return (
        <section id="use-cases" className="py-20 bg-gray-50 dark:bg-secondary" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Example Workflows</h2>
                    <p className="text-gray-500 dark:text-accent mt-4 text-lg max-w-2xl mx-auto">
                        See our AI automation solutions in action. Click on any workflow to watch a demo video.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCasesData.map((useCase, index) => (
                       <UseCaseCard key={index} useCase={useCase} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;