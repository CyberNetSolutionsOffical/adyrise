import React, { useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const Contact: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Let's Build Together</h2>
          <p className="text-gray-500 dark:text-accent mt-4 text-lg">Have a project in mind? We'd love to hear about it.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className={`fade-in-up delay-200 ${isSectionVisible ? 'is-visible' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-light mb-2">Full Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-white dark:bg-primary border border-gray-300 dark:border-accent rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-light mb-2">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-white dark:bg-primary border border-gray-300 dark:border-accent rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight" />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-light mb-2">Message</label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-white dark:bg-primary border border-gray-300 dark:border-accent rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-highlight"></textarea>
            </div>
            <div className="mt-8 text-center">
              <button type="submit" className="bg-highlight text-white font-bold py-3 px-12 rounded-lg text-lg hover:bg-opacity-80 transition-colors duration-300">
                Send Message
              </button>
            </div>
            {status && <p className="text-center mt-4 text-highlight">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;