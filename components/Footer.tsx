
import React from 'react';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-highlight transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary border-t border-accent/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-highlight mb-4">AI Automation Nepal</h3>
                        <p className="text-accent max-w-sm">
                            Empowering Nepalese businesses with intelligent automation to drive growth and efficiency in the digital age.
                        </p>
                         <div className="flex space-x-4 mt-6">
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128V11.16h3.128V8.65c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.54h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>
                            </SocialIcon>
                             <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-accent hover:text-highlight">About Us</a></li>
                            <li><a href="#services" className="text-accent hover:text-highlight">Services</a></li>
                            <li><a href="#portfolio" className="text-accent hover:text-highlight">Portfolio</a></li>
                            <li><a href="#contact" className="text-accent hover:text-highlight">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-accent">
                            <li>Kathmandu, Nepal</li>
                            <li>+977-9800000000</li>
                            <li>contact@ainepal.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-accent/20 text-center text-accent">
                    <p>&copy; {new Date().getFullYear()} AI Automation Nepal. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
