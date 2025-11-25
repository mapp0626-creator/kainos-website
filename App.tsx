import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import InvestmentApproach from './components/InvestmentApproach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';

const App: React.FC = () => {
  // In a real app, you might check sessionStorage here to skip modal if already accepted
  // const [hasAccepted, setHasAccepted] = useState(sessionStorage.getItem('kainos_disclaimer_accepted') === 'true');
  
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleDisclaimerAccept = () => {
    setHasAccepted(true);
    // sessionStorage.setItem('kainos_disclaimer_accepted', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerModal onAccept={handleDisclaimerAccept} />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <AboutUs id="about" />
        <InvestmentApproach id="approach" />
        <Contact id="contact" />
      </main>

      <Footer />
    </div>
  );
};

export default App;