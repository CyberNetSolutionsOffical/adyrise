import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const Hero: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  const headingText = "Automate Your Business with Intelligent ";
{                                                                     }

  const highlightedText = "AI Solutions";

  return (
    <section id="home" className="py-24 md:py-32 bg-white dark:bg-primary" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-3xl mx-auto fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-relaxed">
            {isVisible && headingText.split('').map((char, index) => (
              <span 
                key={index}
                className="animate-letter-reveal"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {char}
              </span>
            ))}
            <span className="text-highlight">
              {isVisible && highlightedText.split('').map((char, index) => (
                <span 
                  key={index}
                  className="animate-letter-reveal"
                  style={{ animationDelay: `${(headingText.length + index) * 50}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-light max-w-2xl mx-auto">
            We build custom AI-powered automations to streamline your operations, boost efficiency, and drive growth for your business in Nepal.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="bg-highlight text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors duration-300">
              Explore Our Services
            </a>
            <a href="#contact" className="bg-gray-100 dark:bg-secondary text-gray-800 dark:text-light font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 dark:hover:bg-accent dark:hover:text-white transition-colors duration-300">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;