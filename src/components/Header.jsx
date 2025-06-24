import React from 'react';
import './LandingPage.css'; // Make sure this CSS file exists
import LongenomicsLogo from '../assets/longenomics-logo.png'; // Adjust path if logo is in a different assets folder

const Header = () => {
  return (
    <header className="lp-header">
      <div className="lp-logo-nav">
        <div className="lp-logo-wrapper">
          <img src={LongenomicsLogo} alt="Longenomics Logo" className="lp-logo" />
        </div>
        <nav className="lp-nav-links">
          <a href="#platform" className="lp-nav-item">Platform</a>
          <a href="#about" className="lp-nav-item">About</a>
          <a href="#blog" className="lp-nav-item">Blog</a>
          <a href="#support" className="lp-nav-item">Support</a>
        </nav>
      </div>
      <button className="lp-button lp-header-join-button">Join</button>
    </header>
  );
};

export default Header;