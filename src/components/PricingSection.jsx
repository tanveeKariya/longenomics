import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="lp-pricing-section">
      <div className="lp-pricing-cards-grid">
        <div className="lp-pricing-card">
          <div className="lp-price-header">
            <h4 className="lp-price">$0</h4>
            <p className="lp-price-description">Free forever</p>
          </div>
          <h5 className="lp-plan-name">Starter</h5>
          <p className="lp-plan-tagline">Track basics with AI insights.</p>
          <button
            className="lp-button lp-pricing-button lp-primary-pricing-button"
            onClick={() => navigate('/starter')}
          >
            Get started
          </button>
          <div className="lp-includes-section">
            <h6 className="lp-includes-header">INCLUDES</h6>
            <ul className="lp-includes-list">
              <li><span className="lp-check-icon"></span>Personal health dashboard</li>
              <li><span className="lp-check-icon"></span>Wearable sync</li>
              <li><span className="lp-check-icon"></span>AI health tips</li>
            </ul>
          </div>
        </div>

        <div className="lp-pricing-card">
          <div className="lp-price-header">
            <h4 className="lp-price">$9</h4>
            <p className="lp-price-description">Per month</p>
          </div>
          <h5 className="lp-plan-name">Core</h5>
          <p className="lp-plan-tagline">Deeper analytics and custom goals.</p>
          <button
            className="lp-button lp-pricing-button lp-primary-pricing-button"
            onClick={() => navigate('/core')}
          >
            Upgrade
          </button>
          <div className="lp-includes-section">
            <h6 className="lp-includes-header">INCLUDES</h6>
            <ul className="lp-includes-list">
              <li><span className="lp-check-icon"></span>All Starter features</li>
              <li><span className="lp-check-icon"></span>Lab data sync</li>
              <li><span className="lp-check-icon"></span>Custom milestones</li>
              <li><span className="lp-check-icon"></span>Priority support</li>
            </ul>
          </div>
        </div>

        <div className="lp-pricing-card">
          <div className="lp-price-header">
            <h4 className="lp-price">$19</h4>
            <p className="lp-price-description">Per month</p>
          </div>
          <h5 className="lp-plan-name">Pro</h5>
          <p className="lp-plan-tagline">Full platform for teams & orgs.</p>
          <button
            className="lp-button lp-pricing-button lp-secondary-pricing-button"
            onClick={() => navigate('/pro')}
          >
            Contact
          </button>
          <div className="lp-includes-section">
            <h6 className="lp-includes-header">INCLUDES</h6>
            <ul className="lp-includes-list">
              <li><span className="lp-check-icon"></span>All Core features</li>
              <li><span className="lp-check-icon"></span>Team collaboration</li>
              <li><span className="lp-check-icon"></span>AI risk prediction</li>
              <li><span className="lp-check-icon"></span>Advanced reporting</li>
              <li><span className="lp-check-icon"></span>Account manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
