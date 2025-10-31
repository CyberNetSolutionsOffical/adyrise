import React from 'react';
import type { Testimonial } from '../types';
import useIntersectionObserver from './useIntersectionObserver';

const testimonialData: Testimonial[] = [
  {
    quote: "Adyrise's chatbot solution transformed our customer service. We're now handling 3x more queries with the same team size. Incredible ROI!",
    author: 'Sunil Shrestha',
    company: 'CEO, Nepal E-commerce Hub',
    image: 'https://i.pravatar.cc/150?u=sunil'
  },
  {
    quote: "The automation for our social media was a game-changer. What used to take us 10 hours a week now runs on its own, and our engagement is up 50%.",
    author: 'Anjali Lama',
    company: 'Marketing Manager, Himalayan Travels',
    image: 'https://i.pravatar.cc/150?u=anjali'
  },
  {
    quote: "We were skeptical about AI, but the team at Adyrise made it so simple. The invoice processing system they built is flawless and has saved us thousands.",
    author: 'Rajesh Thapa',
    company: 'Founder, Kathmandu Crafts',
    image: 'https://i.pravatar.cc/150?u=rajesh'
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    const delay = `delay-${index * 100}`;

    return (
        <div ref={ref} className={`bg-white dark:bg-secondary p-8 rounded-lg shadow-lg h-full flex flex-col fade-in-up ${delay} ${isVisible ? 'is-visible' : ''}`}>
            <p className="text-gray-700 dark:text-light italic mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full mr-4" />
                <div>
                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-accent">{testimonial.company}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-primary" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="text-gray-500 dark:text-accent mt-4 text-lg">Real stories from businesses we've empowered.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;