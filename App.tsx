import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Technology from './components/Technology';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-primary text-gray-800 dark:text-light font-sans">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <HowItWorks />
          <UseCases />
          <Technology />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;