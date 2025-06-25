import React from 'react';
import './LandingPage.css';

const HeroSection = () => {
  return (
    <main className="lp-hero-section">
      <h1 className="lp-hero-title">Your Gamified Digital Twin for Better Health</h1>
      <p className="lp-hero-subtitle">
        Unified health data. Predictive insights. Personalized longevity guidance for your future.
      </p>
      <div className="lp-cta-buttons">
        <button className="lp-button lp-primary-cta">Join now</button>
        <button className="lp-button lp-secondary-cta">See features</button>
      </div>
    </main>
  );
};

export default HeroSection;
