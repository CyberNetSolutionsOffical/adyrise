import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const technologies = [
    { 
        name: 'Google Gemini', 
        description: 'For advanced reasoning and multi-modal capabilities.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M12.3792 1.62083L14.4375 5.75L18.5792 7.80833L14.4375 9.86667L12.3792 14L10.3208 9.86667L6.17917 7.80833L10.3208 5.75L12.3792 1.62083Z" fill="url(#gemini-gradient1)"></path>
                <path d="M4.62083 9.86667L5.65 11.925L7.70833 12.9542L5.65 13.9833L4.62083 16.0417L3.59167 13.9833L1.53333 12.9542L3.59167 11.925L4.62083 9.86667Z" fill="url(#gemini-gradient2)"></path>
                <path d="M19.1333 16.0417L18.1042 18.1L16.0458 19.1292L18.1042 20.1583L19.1333 22.2167L20.1625 20.1583L22.2208 19.1292L20.1625 18.1L19.1333 16.0417Z" fill="url(#gemini-gradient3)"></path>
                <defs>
                    <linearGradient id="gemini-gradient1" x1="6.179" y1="7.808" x2="18.579" y2="7.808" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8E68FF"></stop>
                        <stop offset="1" stopColor="#58A6FF"></stop>
                    </linearGradient>
                    <linearGradient id="gemini-gradient2" x1="1.533" y1="12.954" x2="7.708" y2="12.954" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8E68FF"></stop>
                        <stop offset="1" stopColor="#58A6FF"></stop>
                    </linearGradient>
                    <linearGradient id="gemini-gradient3" x1="16.046" y1="19.129" x2="22.221" y2="19.129" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8E68FF"></stop>
                        <stop offset="1" stopColor="#58A6FF"></stop>
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    { 
        name: 'OpenAI', 
        description: 'Powering creative text generation and conversation.',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-800 dark:text-white">
                <path d="M18.197 3.864c-1.28-1.023-3.153-1.26-4.88-.713a10.88 10.88 0 00-2.27.973c-.453.24-.84.54-1.205.862-1.325 1.178-2.12 2.8-2.28 4.47-.137 1.425.212 2.92.938 4.21.563 1.008 1.42 1.912 2.454 2.58.82.527 1.742.88 2.68 1.13.93.25 1.9.36 2.83.33 1.71-.05 3.4-.64 4.74-1.63 1.25-1.05 2.1-2.5 2.45-3.95.28-1.2.3-2.45.02-3.66-.4-1.68-1.4-3.25-2.7-4.43zm-1.12 9.076c-.9 1.07-2.3 1.7-3.7 1.7s-2.8-.63-3.7-1.7c-.9-1.07-1.45-2.55-1.45-4.05s.55-2.98 1.45-4.05c.9-1.07 2.3-1.7 3.7-1.7s2.8.63 3.7 1.7c.9 1.07 1.45 2.55 1.45 4.05s-.55 2.98-1.45 4.05zM4.135 12.354a1.08 1.08 0 01-1.08-1.08c0-.6.48-1.08 1.08-1.08h2.16c.6 0 1.08.48 1.08 1.08 0 .6-.48 1.08-1.08 1.08h-2.16zM2.025 10.224a1.08 1.08 0 01-1.08-1.08c0-.6.48-1.08 1.08-1.08h2.16c.6 0 1.08.48 1.08 1.08 0 .6-.48 1.08-1.08 1.08h-2.16zM6.265 8.094a1.08 1.08 0 01-1.08-1.08c0-.6.48-1.08 1.08-1.08h2.16c.6 0 1.08.48 1.08 1.08 0 .6-.48 1.08-1.08 1.08h-2.16z" />
            </svg>
        )
    },
    { 
        name: 'LangChain', 
        description: 'Building context-aware, reasoning applications.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
              <path d="M13.632 6.307l4.33 4.33-5.253 5.253-4.33-4.33 5.253-5.253zm-2.48 7.398l-1.076 1.076-3.41-3.41 1.076-1.076 3.41 3.41zM15.7 4.24l2.064 2.065-2.253.924-2.064-2.065 2.253-.924zm-11.232 8.7l.924-2.253 2.064 2.064-.924 2.253-2.064-2.064z" fill="url(#lc-1)"></path>
              <path d="M12.076 17.753l-4.33-4.33 5.253-5.253 4.33 4.33-5.253 5.253zm-2.48-7.398l-1.076 1.076-3.41-3.41 1.076-1.076 3.41 3.41z" fill="url(#lc-2)"></path>
              <defs>
                <linearGradient id="lc-1" x1="5.166" y1="13.564" x2="16.92" y2="1.81" gradientUnits="userSpaceOnUse"><stop stopColor="#58A6FF"></stop><stop offset="1" stopColor="#8E68FF"></stop></linearGradient>
                <linearGradient id="lc-2" x1="3.101" y1="11.5" x2="14.855" y2="-.254" gradientUnits="userSpaceOnUse"><stop stopColor="#8E68FF"></stop><stop offset="1" stopColor="#58A6FF" stopOpacity=".5"></stop></linearGradient>
              </defs>
            </svg>
        )
    },
    { 
        name: 'Python', 
        description: 'The backbone of our AI/ML development.',
        icon: (
            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M12 24a11.93 11.93 0 0 1-4.22-23.23 12 12 0 0 1 15.45 15.45A11.93 11.93 0 0 1 12 24zm-1.1-16.44h4.43v2.8H10.9v-2.8zm6.65 11.12a4.43 4.43 0 0 0 4.38-4.43V9.1h-2.79v1.15a1.64 1.64 0 0 1-1.59 1.65h-1.1v2.79h3.89v1.11H12v2.8h5.55zM12 4.15h4.43v2.79H12V4.15zm-1.1 11.12h4.43v2.8H10.9v-2.8zm-6.65-6.68a4.43 4.43 0 0 0-4.38 4.43v1.15h2.79v-1.15a1.64 1.64 0 0 1 1.59-1.65h1.1v-2.79H1.1v-1.11H12V0H6.45v5.58z" fill="#306998"/>
                <path d="M12 24a11.93 11.93 0 0 0 4.22-23.23A12 12 0 0 0 .77 8.32 11.93 11.93 0 0 0 12 24zm1.1-7.56H8.67v-2.8h4.43v2.8zm-6.65-11.12a4.43 4.43 0 0 0-4.38 4.43v1.15h2.79v-1.15a1.64 1.64 0 0 1 1.59-1.65h1.1V4.15H1.1v-1.11H12V5.85H6.45zM12 19.85H8.67v-2.79H12v2.79zm1.1-11.12H8.67V5.94h4.43v2.79zm6.65 6.68a4.43 4.43 0 0 0 4.38-4.43V9.1h-2.79v1.15a1.64 1.64 0 0 1-1.59 1.65h-1.1v2.79h3.89v1.11H12v5.6h5.55v-2.8z" fill="#FFD43B"/>
            </svg>
        )
    },
    { 
        name: 'React', 
        description: 'For dynamic and responsive user interfaces.',
        icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-highlight">
                <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"></ellipse>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
                </g>
            </svg>
        )
    },
    { 
        name: 'Node.js', 
        description: 'For scalable and efficient backend services.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#68A063]">
                <path fill="currentColor" d="M11.983 0a1.487 1.487 0 00-1.285.748L.54 19.113a1.487 1.487 0 001.284 2.23h19.33a1.487 1.487 0 001.285-2.23L13.27.747A1.487 1.487 0 0011.984 0zM11.13 5.488l3.633 6.303l-1.95 1.125l-3.56-6.175l1.877-1.253zm-2.07 1.198l-1.876 1.253l3.56 6.176l1.95-1.126l-3.634-6.303zm6.34 3.737l-4.32 2.493v4.985l2.427-1.397v-2.49l1.893 1.093v-2.288l.001-.002z"></path>
            </svg>
        )
    },
];

const Technology: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
    return (
        <section id="technology" className="py-20 bg-white dark:bg-primary" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Technology We Use</h2>
                    <p className="text-gray-500 dark:text-accent mt-4 text-lg">Leveraging cutting-edge tools to build robust solutions.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className={`bg-gray-50 dark:bg-secondary p-6 rounded-lg text-center flex flex-col items-center fade-in-up delay-${index*100} ${isVisible ? 'is-visible' : ''}`}>
                            <div className="mb-4">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tech.name}</h3>
                            <p className="text-gray-700 dark:text-light mt-2 flex-grow">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;