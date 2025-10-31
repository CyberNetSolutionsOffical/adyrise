import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const logos = [
    { name: 'Partner One', src: 'https://via.placeholder.com/150x60/E0E1DD/415A77?text=Partner+1', alt: 'Partner One Logo' },
    { name: 'Partner Two', src: 'https://via.placeholder.com/150x60/E0E1DD/415A77?text=Partner+2', alt: 'Partner Two Logo' },
    { name: 'Partner Three', src: 'https://via.placeholder.com/150x60/E0E1DD/415A77?text=Partner+3', alt: 'Partner Three Logo' },
    { name: 'Partner Four', src: 'https://via.placeholder.com/150x60/E0E1DD/415A77?text=Partner+4', alt: 'Partner Four Logo' },
    { name: 'Partner Five', src: 'https://via.placeholder.com/150x60/E0E1DD/415A77?text=Partner+5', alt: 'Partner Five Logo' },
];

const TrustBadges: React.FC = () => {
    // FIX: Specify HTMLElement as the generic type for useIntersectionObserver to match the 'section' tag ref.
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

    return (
        <section ref={ref} className="bg-secondary py-12">
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
                <h3 className="text-center text-accent font-semibold tracking-wider uppercase mb-8">
                    Our Partners & Certifications
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center">
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="h-10 transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;