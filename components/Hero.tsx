
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="absolute inset-0 bg-primary opacity-50"></div>
       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1&grayscale&blur=2')" }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Transform Your Business with <span className="text-highlight">AI Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-light mb-8 max-w-xl mx-auto lg:mx-0">
              We help businesses in Nepal save time, increase efficiency, and grow revenue through AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="bg-highlight text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
              >
                Book a Free Demo
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-highlight text-highlight font-bold py-3 px-8 rounded-lg text-lg hover:bg-highlight hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                See Our Services
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://picsum.photos/seed/ai-hero/600/500" 
              alt="AI Automation" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
        <div className="mt-20 text-center">
            <p className="text-accent font-semibold">Trusted by 100+ Businesses in Nepal</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
