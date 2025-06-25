import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import LongenomicsLogo from '../assets/longenomics-logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-left-section">
          <div className="footer-logo-section">
            <img src={LongenomicsLogo} alt="Longenomics Logo" className="longenomics-logo" />
          </div>
          <button className="join-now-button">Join now</button>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h3>Platform</h3>
            <ul>
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#plans">Plans</a></li>
              <li><a href="#help">Help</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#cookies">Cookies</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#news">News</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
        </div>
        <div className="footer-horizontal-line"></div>
      </div>

      <div className="footer-copyright-section">
        <div className="footer-legal-links">
          <a href="#privacy-policy">Privacy</a>
          <a href="#terms-of-service">Terms</a>
          <a href="#cookies-policy">Cookies</a>
        </div>
        <div className="footer-copyright-text">
          All rights reserved © 202 Longenomics
        </div>
      </div>
    </footer>
  );
};

export default Footer;
