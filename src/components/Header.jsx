import React, { useState } from 'react';
import './Header.css'; // Make sure this path is correct
import LongenomicsLogo from '../assets/longenomics-logo.png'; // Make sure this path is correct

// New component for individual dropdown items with title and description
const PlatformDropdownItem = ({ title, description, href }) => (
  <a href={href} className="platform-dropdown-item-link" onClick={(e) => e.stopPropagation()}>
    <div className="item-icon">
        {/* SVG for a generic document/file icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6L14 2z"/>
        </svg>
    </div>
    <div className="item-text-content">
      <h5 className="item-title">{title}</h5>
      <p className="item-description">{description}</p>
    </div>
  </a>
);

const Header = () => {
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu

  const togglePlatformDropdown = (event) => {
    event.stopPropagation();
    setShowPlatformDropdown((prev) => !prev);
    setShowSupportDropdown(false); // Close support dropdown if open
  };

  const toggleSupportDropdown = (event) => {
    event.stopPropagation();
    setShowSupportDropdown((prev) => !prev);
    setShowPlatformDropdown(false); // Close platform dropdown if open
  };

  const toggleMobileMenu = (event) => {
    event.stopPropagation(); // Prevent header's closeAllDropdowns from immediately closing
    setShowMobileMenu((prev) => !prev);
    setShowPlatformDropdown(false); // Close other dropdowns when mobile menu opens
    setShowSupportDropdown(false);
  };

  // This function closes all dropdowns when a click occurs outside of them
  const handleClickOutside = (event) => {
    if (showPlatformDropdown && !event.target.closest('.platform-dropdown')) {
      setShowPlatformDropdown(false);
    }
    if (showSupportDropdown && !event.target.closest('.support-dropdown')) {
      setShowSupportDropdown(false);
    }
    if (showMobileMenu && !event.target.closest('.mobile-nav') && !event.target.closest('.hamburger-menu')) {
      setShowMobileMenu(false);
    }
  };

  // Add event listener to document for closing dropdowns when clicking outside
  // This is a simple implementation; in a real app, use useEffect for cleanup
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showPlatformDropdown, showSupportDropdown, showMobileMenu]);


  return (
    <>
      <header className="lp-header">
        <div className="lp-logo-wrapper">
          <img src={LongenomicsLogo} alt="Longenomics Logo" className="lp-logo" />
          <span className="lp-logo-text">Longenomics</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="lp-nav-links desktop-nav">
          <div
            className={`lp-nav-item platform-dropdown ${showPlatformDropdown ? 'active' : ''}`}
            onClick={togglePlatformDropdown}
          >
            Platform
            <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {showPlatformDropdown && (
              <div className="platform-dropdown-panel" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
                <div className="platform-content-wrapper">
                  <div className="platform-columns">
                    <div className="platform-column">
                      <h4>PERSONALIZED HEALTH</h4>
                      <PlatformDropdownItem title="Digital twin" description="Monitor your health journey." href="#" />
                      <PlatformDropdownItem title="Health timeline" description="See risks and milestones." href="#" />
                      <PlatformDropdownItem title="AI insights" description="Receive data-backed guidance." href="#" />
                    </div>
                    <div className="platform-column">
                      <h4>INTEGRATIONS</h4>
                      <PlatformDropdownItem title="Wearables" description="Connect for live tracking." href="#" />
                      <PlatformDropdownItem title="Lab reports" description="Analyze lab data easily." href="#" />
                      <PlatformDropdownItem title="Behavior signals" description="Track daily habits." href="#" />
                    </div>
                    <div className="platform-column">
                      <h4>RECOMMENDATIONS</h4>
                      <PlatformDropdownItem title="Medical tests" description="Suggested screenings for you." href="#" />
                      <PlatformDropdownItem title="Diet plans" description="Personalized nutrition advice." href="#" />
                      <PlatformDropdownItem title="Motivation" description="Engage with gamified tools." href="#" />
                    </div>
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
            <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {showSupportDropdown && (
              <div className="support-dropdown-panel" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
                <a href="#help-center">Help Center</a>
                <a href="#contact">Contact</a>
              </div>
            )}
          </div>
        </nav>

        <div className="lp-header-actions">
          <button className="lp-button lp-header-join-button">Join</button>
          {/* Hamburger Menu Icon (Only visible on mobile via CSS) */}
          <div className={`hamburger-menu ${showMobileMenu ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      {/* Main Content (Headline, Subtext, Buttons) - NOT part of the Header component, but shown for context */}
      <div className="main-content">
        <h1>Your Gamified Digital Twin for Better Health</h1>
        <p className="subtext">Unified health data. Predictive insights. Personalized longevity guidance for your future.</p>
        <div className="main-content-buttons">
          <button className="lp-button primary-button">Join now</button>
          <button className="lp-button secondary-button">See features</button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Conditional rendering based on showMobileMenu) */}
      {showMobileMenu && (
        <div className="mobile-menu-overlay"> {/* Clicking overlay closes menu handled by global click handler */}
          <nav className="lp-nav-links mobile-nav" onClick={(e) => e.stopPropagation()}> {/* Prevent overlay click from closing menu if clicking inside nav */}
            {/* Mobile Nav Header with Logo and Close Button */}
            <div className="mobile-nav-header">
                <img src={LongenomicsLogo} alt="Longenomics Logo" className="lp-logo" />
                <span className="lp-logo-text">Longenomics</span>
                {/* Close Button (X icon) */}
                <div className="close-menu" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div
              className={`lp-nav-item platform-dropdown ${showPlatformDropdown ? 'active' : ''}`}
              onClick={togglePlatformDropdown}
            >
              Platform
              <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {showPlatformDropdown && (
                <div className="platform-dropdown-panel mobile-panel">
                  <div className="platform-content-wrapper">
                    <div className="platform-columns">
                      <div className="platform-column">
                        <h4>PERSONALIZED HEALTH</h4>
                        <PlatformDropdownItem title="Digital twin" description="Monitor your health journey." href="#" />
                        <PlatformDropdownItem title="Health timeline" description="See risks and milestones." href="#" />
                        <PlatformDropdownItem title="AI insights" description="Receive data-backed guidance." href="#" />
                      </div>
                      <div className="platform-column">
                        <h4>INTEGRATIONS</h4>
                        <PlatformDropdownItem title="Wearables" description="Connect for live tracking." href="#" />
                        <PlatformDropdownItem title="Lab reports" description="Analyze lab data easily." href="#" />
                        <PlatformDropdownItem title="Behavior signals" description="Track daily habits." href="#" />
                      </div>
                      <div className="platform-column">
                        <h4>RECOMMENDATIONS</h4>
                        <PlatformDropdownItem title="Medical tests" description="Suggested screenings for you." href="#" />
                        <PlatformDropdownItem title="Diet plans" description="Personalized nutrition advice." href="#" />
                        <PlatformDropdownItem title="Motivation" description="Engage with gamified tools." href="#" />
                      </div>
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

            <a href="#about" className="lp-nav-item" onClick={toggleMobileMenu}>About</a>
            <a href="#blog" className="lp-nav-item" onClick={toggleMobileMenu}>Blog</a>

            <div
              className={`lp-nav-item support-dropdown ${showSupportDropdown ? 'active' : ''}`}
              onClick={toggleSupportDropdown}
            >
              Support
              <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {showSupportDropdown && (
                <div className="support-dropdown-panel mobile-panel">
                  <a href="#help-center" onClick={toggleMobileMenu}>Help Center</a>
                  <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
                </div>
              )}
            </div>
            <button className="lp-button mobile-join-button" onClick={toggleMobileMenu}>Join</button> {/* Mobile Join button */}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;