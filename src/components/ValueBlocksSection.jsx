import React from 'react';
import './LandingPage.css';
import TabImage from '../assets/tab.png';
import { useNavigate } from 'react-router-dom';

const ValueBlocksSection = () => {
  const navigate = useNavigate();

  return (
    <section className="lp-dark-value-section">
      <div className="lp-value-blocks-grid">
        <div className="lp-value-block">
          <div className="lp-value-image-wrapper">
            <img src={TabImage} alt="Collaborative precision health engine" className="lp-value-image" />
          </div>
          <h3 className="lp-value-title">Collaborative precision health engine</h3>
          <p className="lp-value-description">
            Unify research, data, and insights for predictive, personalized preventive care. Accelerate innovation with secure, integrated collaboration.
          </p>
          <button
            className="lp-button lp-value-button lp-discover-button"
            onClick={() => navigate('/discover')}
          >
            Discover
          </button>
        </div>

        <div className="lp-value-block">
          <div className="lp-value-image-wrapper">
            <img src={TabImage} alt="Motivational health, gamified" className="lp-value-image" />
          </div>
          <h3 className="lp-value-title">Motivational health, gamified</h3>
          <p className="lp-value-description">
            Drive healthy habits with tailored challenges, progress tracking, and rewards. Stay engaged and proactive on your wellness path.
          </p>
          <button
            className="lp-button lp-value-button lp-join-button"
            onClick={() => navigate('/join')}
          >
            Join now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueBlocksSection;
