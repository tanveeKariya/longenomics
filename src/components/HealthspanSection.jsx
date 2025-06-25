import React from 'react';
import './HealthspanSection.css';
import HealthspanTabletImage from '../assets/tab.png';
import HealthspanGraphImage from '../assets/tab.png';

function HealthspanSection() {
  return (
    <section className="lp-healthspan-section">
      <div className="lp-healthspan-content">
        <h2 className="lp-healthspan-title">Take charge of your healthspan</h2>
        <p className="lp-healthspan-description">
          Unify your health data for actionable, AI-powered insights. Track wearables, labs,
          and habits in one timeline. Get personalized recommendations and stay ahead with
          predictive, preventive care.
        </p>
        <button className="lp-button lp-healthspan-button">Join now</button>
      </div>
      <div className="lp-healthspan-image-top-right">
        <img src={HealthspanTabletImage} alt="Health data on tablet" />
      </div>
      <div className="lp-healthspan-image-bottom-left">
        <img src={HealthspanGraphImage} alt="Health data graph" />
      </div>
    </section>
  );
}

export default HealthspanSection;
