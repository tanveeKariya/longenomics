import React from 'react';
import './TabletShowcase.css'; // Make sure this path is correct
import TabImage from '../assets/tab.png';

const TabletShowcase = () => {
  return (
    <section className="lp-showcase-section">
      <div className="lp-showcase-image-wrapper">
        <img src={TabImage} alt="HR Dashboard on Tablet" className="lp-tab-image" />
      </div>
    </section>
  );
};

export default TabletShowcase;