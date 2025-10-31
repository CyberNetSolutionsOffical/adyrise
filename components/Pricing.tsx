
import React from 'react';
import type { PricingPlan } from '../types';

const pricingData: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'Starting at NPR 25,000/mo',
    features: [
      '1 Automated Workflow',
      'Basic Chatbot Setup',
      'Social Media Scheduling (1 Profile)',
      'Monthly Performance Report',
      'Email Support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: 'Starting at NPR 75,000/mo',
    features: [
      '5 Automated Workflows',
      'Advanced AI Chatbot (Website + Social)',
      'Full Marketing Automation',
      'AI Content Generation (Basic)',
      'Real-time Analytics Dashboard',
      'Priority Email & Chat Support',
    ],
    isPopular: true,
  },
  {
    name: 'Premium',
    price: 'Custom Pricing',
    features: [
      'Unlimited Automated Workflows',
      'Custom AI Solutions',
      'Full E-commerce Automation',
      'Advanced AI Content & Video',
      'Dedicated Account Manager',
      '24/7 Phone & On-site Support',
    ],
    isPopular: false,
  },
];


const PricingCard = ({ plan }: { plan: PricingPlan }) => (
    <div className={`border-2 rounded-xl p-8 flex flex-col h-full ${plan.isPopular ? 'border-highlight bg-secondary' : 'border-accent bg-secondary'}`}>
        {plan.isPopular && <span className="bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">Most Popular</span>}
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
        <p className="text-3xl font-extrabold text-highlight my-4">{plan.price}</p>
        <ul className="space-y-3 text-light flex-grow">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-highlight mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <a href="#contact" className={`mt-8 block text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-highlight text-white hover:bg-opacity-80' : 'bg-accent text-light hover:bg-highlight hover:text-white'}`}>
            Get Started
        </a>
    </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Flexible Pricing for Every Business</h2>
          <p className="text-accent mt-4 text-lg">Choose the plan that's right for you.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="text-center mt-16">
            <p className="text-lg text-light">Need a custom solution? <a href="#contact" className="text-highlight font-bold hover:underline">Contact us for a personalized quote.</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
