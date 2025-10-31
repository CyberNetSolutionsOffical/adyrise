import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '10k+', label: 'Hours Saved for Clients' },
    { value: '15+', label: 'Industries Served' },
];

const Stats: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });

    return (
        <section ref={ref} className="bg-gray-50 dark:bg-secondary py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className={`fade-in-up delay-${index*100} ${isVisible ? 'is-visible' : ''}`}>
                            <p className="text-4xl md:text-5xl font-extrabold text-highlight">{stat.value}</p>
                            <p className="mt-2 text-lg text-gray-700 dark:text-light">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;