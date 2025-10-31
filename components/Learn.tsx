import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const Learn: React.FC = () => {
    // FIX: Specify HTMLElement as the generic type for useIntersectionObserver to match the 'section' tag ref.
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
    
    return (
        <section id="learn" className="py-20 bg-secondary" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center fade-in-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Learn More?</h2>
                    <p className="text-accent mt-4 text-lg max-w-2xl mx-auto">
                        Check out our blog for the latest insights on AI, or contact us directly to discuss how we can help your business grow.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a href="#blog" className="bg-highlight text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors duration-300">
                            Visit Our Blog
                        </a>
                        <a href="#contact" className="bg-primary text-light font-bold py-3 px-8 rounded-lg text-lg hover:bg-accent hover:text-white transition-colors duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learn;