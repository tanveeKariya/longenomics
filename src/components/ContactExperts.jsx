import React from 'react';
import './ContactExperts.css'; // Import your CSS file
import tabimage1 from '../assets/tab.png'; // Adjust path if needed
import tabimage2 from '../assets/tab.png'; // Adjust path if needed

const ContactExperts = () => {
  return (
    <div className="contact-experts-container">
      <h1>Get in touch with experts</h1>

      <div className="cards-wrapper">
        {/* Card 1: Talk to our team */}
        <div className="card">
          <img src={tabimage1} alt="Office setup with computers" className="card-image" />
          <div className="card-content">
            <h2>Talk to our team</h2>
            <p>
              Reach out for platform details, pricing, or tailored solutions.
            </p>
            <button className="card-button">Connect</button>
          </div>
        </div>

        {/* Card 2: Need support? */}
        <div className="card">
          <img src={tabimage2} alt="People in a meeting discussing" className="card-image" />
          <div className="card-content">
            <h2>Need support?</h2>
            <p>
              Browse our Help Center or visit the Community for guidance and answers.
            </p>
            <button className="card-button">Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactExperts;