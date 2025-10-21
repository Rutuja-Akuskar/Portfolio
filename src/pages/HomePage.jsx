import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Welcome from '../components/Welcome';
import Specializations from '../components/Specializations';
import CarePhilosophy from '../components/CarePhilosophy';
import LeadHero from '../components/LeadHero';  

const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Dr. Rutuja's Clinic - Expert Physiotherapy & Rehabilitation</title>
        <meta name="description" content="Welcome to Dr. Rutuja's clinic. We offer professional physiotherapy services specializing in manual therapy, sports injury rehabilitation, and pain management to help you live a pain-free life." />
      </Helmet>
      <Hero />
      <Welcome />
      {/* <Services /> */}
      {/* <About /> */}
      <Specializations />
      <CarePhilosophy />  
      <Testimonials />
      {/* <Contact /> */}
      <LeadHero />
    </PageTransition>
  );
};

export default HomePage;