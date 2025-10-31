
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Their AI chatbot transformed our customer service overnight. Our team can now focus on complex issues while the bot handles 80% of queries. Highly recommended!",
    name: 'Ramesh Adhikari',
    title: 'CEO, Nepal Trekking Co.',
    image: 'https://picsum.photos/seed/client1/100',
    rating: 5,
  },
  {
    quote: "The marketing automation system they built for us is a game-changer. We've seen a 200% increase in qualified leads in just three months. Incredible results!",
    name: 'Priya Karki',
    title: 'Marketing Director, Himalayan Java',
    image: 'https://picsum.photos/seed/client2/100',
    rating: 5,
  },
  {
    quote: "As a manufacturing company, efficiency is key. Their business process automation saved us countless hours and reduced human error significantly. A truly valuable partner.",
    name: 'Sandeep Shrestha',
    title: 'Operations Manager, Everest Steel',
    image: 'https://picsum.photos/seed/client3/100',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col h-full">
        <StarRating rating={testimonial.rating} />
        <p className="text-light my-4 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center mt-4">
            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4"/>
            <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-accent text-sm">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-accent mt-4 text-lg">Real stories from businesses we've empowered.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
