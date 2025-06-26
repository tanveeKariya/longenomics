import React from 'react';
import './LandingPage.css';
import Header from './Header.jsx';
import HeroSection from './HeroSection.jsx';
import TabletShowcase from './TabletShowcase.jsx';
import LongevityMentor from './LongevityMentor.jsx';
import ValueBlocksSection from './ValueBlocksSection.jsx';
import PricingSection from './PricingSection.jsx';
import HealthspanSection from './HealthspanSection.jsx';
import UserStories from './UserStories.jsx';
import FAQSection from './FAQSection.jsx';
import ContactExperts from './ContactExperts.jsx';
import HealthIntelligence from './HealthIntelligence.jsx';
import Footer from './Footer.jsx';
import TeamSection from './TeamSection.jsx';

const LandingPage = () => {
  return (
    <div className="lp-container">
      <Header />
      <HeroSection />
      <TabletShowcase />
      <LongevityMentor />
      <ValueBlocksSection />
      <PricingSection />
      <HealthspanSection />
      <UserStories />
      <FAQSection />
      <HealthIntelligence />
      <ContactExperts />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
