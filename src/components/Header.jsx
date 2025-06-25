import React, { useState } from 'react';
import './LandingPage.css'; // Make sure this path is correct
import LongenomicsLogo from '../assets/longenomics-logo.png'; // Make sure this path is correct

const Header = () => {
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const togglePlatformDropdown = (event) => {
    event.stopPropagation(); // Prevent header's closeAllDropdowns from immediately closing
    setShowPlatformDropdown((prev) => !prev);
    setShowSupportDropdown(false); // Close support dropdown if open
  };

  const toggleSupportDropdown = (event) => {
    event.stopPropagation(); // Prevent header's closeAllDropdowns from immediately closing
    setShowSupportDropdown((prev) => !prev);
    setShowPlatformDropdown(false); // Close platform dropdown if open
  };

  // This will close all dropdowns when clicking anywhere outside them within the header
  const closeAllDropdowns = () => {
    setShowPlatformDropdown(false);
    setShowSupportDropdown(false);
  };

  return (
    <header className="lp-header" onClick={closeAllDropdowns}>
      <div className="lp-logo-nav">
        <div className="lp-logo-wrapper">
          <img src={LongenomicsLogo} alt="Longenomics Logo" className="lp-logo" />
        </div>
        <nav className="lp-nav-links"> {/* Removed onClick from here */}
          <div
            className={`lp-nav-item platform-dropdown ${showPlatformDropdown ? 'active' : ''}`}
            onClick={togglePlatformDropdown}
          >
            Platform
            {showPlatformDropdown && (
              <div className="platform-dropdown-panel">
                <div className="platform-columns">
                  <div className="platform-column">
                    <h4>PERSONALIZED HEALTH</h4>
                    <a href="#">Digital twin</a>
                    <a href="#">Monitor your health journey.</a> {/* Added descriptions */}
                    <a href="#">Health timeline</a>
                    <a href="#">See risks and milestones.</a>
                    <a href="#">AI insights</a>
                    <a href="#">Receive data-backed guidance.</a>
                  </div>
                  <div className="platform-column">
                    <h4>INTEGRATIONS</h4>
                    <a href="#">Wearables</a>
                    <a href="#">Connect for live tracking.</a>
                    <a href="#">Lab reports</a>
                    <a href="#">Analyze lab data easily.</a>
                    <a href="#">Behavior signals</a>
                    <a href="#">Track daily habits.</a>
                  </div>
                  <div className="platform-column">
                    <h4>RECOMMENDATIONS</h4>
                    <a href="#">Medical tests</a>
                    <a href="#">Suggested screenings for you.</a>
                    <a href="#">Diet plans</a>
                    <a href="#">Personalized nutrition advice.</a>
                    <a href="#">Motivation</a>
                    <a href="#">Engage with gamified tools.</a>
                  </div>
                  <div className="platform-cta-box">
                    <h3>Advance preventive health research</h3>
                    <p>Partner with experts in longevity science.</p>
                    <a href="#" className="cta-link">Demo →</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#about" className="lp-nav-item">About</a>
          <a href="#blog" className="lp-nav-item">Blog</a>

          <div
            className={`lp-nav-item support-dropdown ${showSupportDropdown ? 'active' : ''}`}
            onClick={toggleSupportDropdown}
          >
            Support
            {showSupportDropdown && (
              <div className="support-dropdown-panel">
                <a href="#help-center">Help Center</a>
                <a href="#contact">Contact</a>
              </div>
            )}
          </div>
        </nav>
      </div>
      <button className="lp-button lp-header-join-button">Join</button>
    </header>
  );
};

export default Header;