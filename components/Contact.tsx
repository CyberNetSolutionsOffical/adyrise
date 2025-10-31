
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', businessType: '', message: '' });
        }, 1500);
    };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Build Your Future</h2>
          <p className="text-accent mt-4 text-lg">Contact us today for a free consultation and demo.</p>
        </div>
        <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
                <div className="bg-primary p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-highlight mb-4">Thank You!</h3>
                    <p className="text-light">Your message has been sent. Our team will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-light">Full Name</label>
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-accent border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-light">Email Address</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-accent border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight"/>
                    </div>
                    <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-light">Business Type</label>
                        <select id="businessType" name="businessType" required value={formData.businessType} onChange={handleChange} className="mt-1 block w-full bg-accent border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight">
                            <option value="">Select an option</option>
                            <option>E-commerce</option>
                            <option>Retail</option>
                            <option>Tourism & Hospitality</option>
                            <option>Manufacturing</option>
                            <option>IT & Services</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-light">Message</label>
                        <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-accent border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-highlight"></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-highlight text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 disabled:bg-accent disabled:cursor-not-allowed">
                            {isSubmitting ? 'Sending...' : 'Submit Request'}
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
