import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-primary border-t border-gray-200 dark:border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="flex items-center space-x-3">
              <div className="p-1.5 bg-gray-200 dark:bg-secondary rounded-full">
                <svg className="h-8 w-8 text-highlight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16C6 12 8 12 10 16L14 10L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 10L20 10L20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="9" r="1.5" fill="#FBBF24"/>
                </svg>
              </div>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-highlight to-violet-500 text-transparent bg-clip-text tracking-tight">
                  Adyrise
              </span>
            </a>
            <p className="mt-4 text-gray-700 dark:text-light max-w-xs">
              Building intelligent automation solutions for businesses in Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="text-gray-700 dark:text-light hover:text-highlight">About Us</a></li>
              <li><a href="#services" className="text-gray-700 dark:text-light hover:text-highlight">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-700 dark:text-light hover:text-highlight">How It Works</a></li>
              <li><a href="#use-cases" className="text-gray-700 dark:text-light hover:text-highlight">Use Cases</a></li>
              <li><a href="#contact" className="text-gray-700 dark:text-light hover:text-highlight">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold tracking-wider uppercase">Connect With Us</h3>
            <div className="mt-4 flex space-x-6">
                <a href="https://www.facebook.com/profile.php?id=61581604023951" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 dark:text-light hover:text-highlight transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/@NepGrowYt" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-700 dark:text-light hover:text-highlight transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-accent/20 text-center text-gray-700 dark:text-light">
          <p>&copy; {new Date().getFullYear()} Adyrise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;