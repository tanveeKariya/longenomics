import React from 'react';
import './UserStories.css'; 
import img from '../assets/image.png'; 

const UserStories = () => {
  const testimonials = [
    {
      avatar: img,
      name: 'Avery Lin',
      company: 'HealthSync',
      quote: 'The health timeline gave me clear, actionable steps for prevention.',
      tag: 'HealthSync',
    },
    {
      avatar: img,
      name: 'Jordan Ellis',
      company: 'WellFusion',
      quote: 'Unified data from wearables and labs made my health progress easy to track.',
      tag: 'WellFusion',
    },
    {
      avatar: img,
      name: 'Morgan Shaw',
      company: 'InsightVitals',
      quote: 'AI insights helped me prioritize preventive care in my routine.',
      tag: 'InsightVitals',
    },
    {
      avatar: img,
      name: 'Taylor Reed',
      company: 'BioTrack',
      quote: 'Digital twin features keep me focused on my wellness goals.',
      tag: 'BioTrack',
    },
    {
      avatar: img,
      name: 'Casey Drew',
      company: 'OptiWell',
      quote: 'I finally have a long-term, personalized health plan.',
      tag: 'OptiWell',
    },
    {
      avatar: img,
      name: 'Riley Fox',
      company: 'PulseMetrics',
      quote: 'Centralized health data streamlined my daily routine.',
      tag: 'PulseMetrics',
    },
    {
      avatar: img,
      name: 'Skyler James',
      company: 'LifeSpanIQ',
      quote: 'Recommendations are clear, relevant, and easy to follow.',
      tag: 'LifeSpanIQ',
    },
    {
      avatar: img,
      name: 'Emerson Blake',
      company: 'CoreVitals',
      quote: 'Collaboration tools make sharing progress with my care team simple.',
      tag: 'CoreVitals',
    },
  ];

  return (
    <section className="lp-user-stories-section">
      <div className="lp-section-header lp-user-stories-header">
        <p className="lp-user-stories-subtitle">USER STORIES</p>
        <h2 className="lp-section-title lp-user-stories-title">Personalized health, proven results</h2>
        <p className="lp-section-description lp-user-stories-description">See how professionals use data-driven insights to improve their long-term health.</p>
      </div>
      <div className="lp-testimonial-cards-grid">
        {testimonials.map((testimonial, index) => (
          <div className="lp-testimonial-card" key={index}>
            <div className="lp-testimonial-header">
              <img src={testimonial.avatar} alt={testimonial.name} className="lp-testimonial-avatar" />
              <div className="lp-testimonial-info">
                <h4 className="lp-testimonial-name">{testimonial.name}</h4>
                <p className="lp-testimonial-company">{testimonial.company}</p>
              </div>
            </div>
            <p className="lp-testimonial-quote">"{testimonial.quote}"</p> {/* Added quotes */}
            <p className="lp-testimonial-tag">{testimonial.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserStories;