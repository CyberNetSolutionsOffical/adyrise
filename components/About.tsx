import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const About: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  const contactDetails = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
      text: 'Dinesh Rimal, CEO'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      text: '9708987739'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      text: 'adyrises@gmail.com'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      text: 'Kathmandu, Nepal'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      text: 'Bsc.CSIT, Shikshalaya College'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-primary" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-left fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            A Message from Our Founder
          </h2>
          <p className="text-gray-700 dark:text-light mb-6">
            "Hello, I'm Dinesh Rimal, the CEO and driving force behind Adyrise. My journey into the world of AI began during my Bsc.CSIT studies at Shikshalaya College, where I developed a deep passion for leveraging technology to solve real-world problems."
          </p>
          <p className="text-gray-700 dark:text-light mb-8">
            "At Adyrise, our mission is to empower businesses across Nepal with the transformative potential of AI. We believe that intelligent automation is the key to unlocking unprecedented efficiency and growth. I work personally with our clients to craft custom solutions that deliver tangible results and a significant return on investment."
          </p>

          <div className="border-t border-gray-200 dark:border-accent/20 pt-6">
              <ul className="space-y-4">
                  {contactDetails.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-light">
                          <span className="text-highlight mr-4 flex-shrink-0">{item.icon}</span>
                          <span>{item.text}</span>
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;