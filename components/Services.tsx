import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'AI-Powered Chatbots',
      description: 'Engage customers 24/7, answer queries instantly, and generate leads with intelligent chatbots for your website and social media.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5V4H4zm0 11v5h5v-5H4zm11-11v5h5V4h-5zm0 11v5h5v-5h-5zM5 10h14M10 5v14" />
        </svg>
      ),
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks like data entry, invoice processing, and report generation to free up your team for more valuable work.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'AI Content Creation',
      description: 'Generate high-quality blog posts, social media updates, and marketing copy in seconds, tailored to your brand voice.',
    },
    {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: 'Data Analysis & Insights',
        description: 'Unlock the power of your data. We build AI models to analyze datasets, identify trends, and provide actionable business insights.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20a8 8 0 100-16 8 8 0 000 16z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v.01M4 12h.01M12 20v-.01M20 12h-.01" />
            </svg>
        ),
        title: 'Personalized Marketing AI',
        description: 'Deliver hyper-personalized customer experiences by automating targeted marketing campaigns and product recommendations.',
    },
  ];
  
  const Services: React.FC = () => {
    const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  
    return (
      <section id="services" className="py-20 bg-gray-50 dark:bg-secondary" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Core Services</h2>
            <p className="text-gray-500 dark:text-accent mt-4 text-lg">We offer a range of AI solutions to fit your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white dark:bg-primary p-8 rounded-lg shadow-lg text-center flex flex-col fade-in-up delay-${index*100} ${isSectionVisible ? 'is-visible' : ''}`}>
                <div className="text-highlight inline-block p-4 bg-gray-100 dark:bg-secondary rounded-full mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-700 dark:text-light flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;