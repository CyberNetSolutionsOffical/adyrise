import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We start with a deep dive into your business to understand your challenges, goals, and opportunities for automation.',
    },
    {
      number: '02',
      title: 'Custom Solution Design',
      description: 'Our experts design a tailored AI strategy and solution blueprint that aligns perfectly with your specific needs.',
    },
    {
      number: '03',
      title: 'Development & Implementation',
      description: 'We build, test, and deploy your custom AI solution, ensuring seamless integration with your existing systems.',
    },
    {
      number: '04',
      title: 'Support & Optimization',
      description: 'We provide ongoing support and continuously monitor performance to optimize your solution for maximum impact.',
    },
  ];
  
const HowItWorks: React.FC = () => {
    const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  
    return (
      <section id="how-it-works" className="py-20 bg-white dark:bg-primary" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-gray-500 dark:text-accent mt-4 text-lg">A simple, transparent path to your AI-powered success.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-accent/30 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className={`text-center p-6 fade-in-up delay-${index*100} ${isSectionVisible ? 'is-visible' : ''}`}>
                  <div className="relative inline-block">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center text-2xl font-extrabold text-highlight bg-gray-100 dark:bg-secondary rounded-full border-2 border-highlight">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">{step.title}</h3>
                  <p className="text-gray-700 dark:text-light">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default HowItWorks;