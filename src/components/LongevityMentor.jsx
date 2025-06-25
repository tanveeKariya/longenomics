import React from 'react';
import './LandingPage.css';
import PersonalizedTimelineImage from '../assets/personalized-timeline.png';
import UnifiedDataImage from '../assets/unified-data.png';
import AIRiskInsightsImage from '../assets/ai-risk-insights.jpg';
import TailoredHealthActionsImage from '../assets/tailored-health-actions.jpg';

const LongevityMentor = () => {
  return (
    <section className="lp-longevity-mentor-section">
      <div className="lp-section-header">
        <h2 className="lp-section-title">Your AI-powered longevity mentor</h2>
        <h3 className="lp-section-subtitle">Personalized, predictive health guidance</h3>
        <p className="lp-section-description">
          Unify your health data—wearables, labs, and habits—into a single digital twin. Get predictive insights and clear milestones for a proactive approach to long-term well-being.
        </p>
      </div>

      <div className="lp-feature-cards-grid">
        <div className="lp-feature-card">
          <h4 className="lp-card-title">Personalized health timeline</h4>
          <div className="lp-card-image-wrapper">
            <img src={PersonalizedTimelineImage} alt="Personalized health timeline" className="lp-card-image" />
          </div>
        </div>
        <div className="lp-feature-card">
          <h4 className="lp-card-title">Unified data from wearables & labs</h4>
          <div className="lp-card-image-wrapper">
            <img src={UnifiedDataImage} alt="Unified data from wearables and labs" className="lp-card-image" />
          </div>
        </div>
        <div className="lp-feature-card">
          <h4 className="lp-card-title">AI-driven risk and milestone insights</h4>
          <div className="lp-card-image-wrapper">
            <img src={AIRiskInsightsImage} alt="AI-driven risk and milestone insights" className="lp-card-image" />
          </div>
        </div>
        <div className="lp-feature-card">
          <h4 className="lp-card-title">Tailored health actions & goals</h4>
          <div className="lp-card-image-wrapper">
            <img src={TailoredHealthActionsImage} alt="Tailored health actions and goals" className="lp-card-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongevityMentor;
