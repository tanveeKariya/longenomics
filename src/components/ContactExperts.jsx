import './ContactExperts.css';
import tabimage1 from '../assets/tab.png';
import tabimage2 from '../assets/tab.png';
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

const ContactExperts = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [availableRoutes, setAvailableRoutes] = useState([]);

  const definedRoutes = ['/contact-team', '/support'];

  useEffect(() => {
    setAvailableRoutes(definedRoutes);
  }, []);

  const safeNavigate = (path) => {
    if (availableRoutes.includes(path)) {
      navigate(path);
    } else {
      alert(`Route "${path}" is not available yet.`);
    }
  };

  return (
    <div className="contact-experts-container">
      <h1>Get in touch with experts</h1>
      <div className="cards-wrapper">
        <div className="card">
          <img src={tabimage1} alt="Office setup with computers" className="card-image" />
          <div className="card-content">
            <h2>Talk to our team</h2>
            <p>
              Reach out for platform details, pricing, or tailored solutions.
            </p>
            <button
              className="card-button"
              onClick={() => safeNavigate('/contact-team')}
            >
              Connect
            </button>
          </div>
        </div>
        <div className="card">
          <img src={tabimage2} alt="People in a meeting discussing" className="card-image" />
          <div className="card-content">
            <h2>Need support?</h2>
            <p>
              Browse our Help Center or visit the Community for guidance and answers.
            </p>
            <button
              className="card-button"
              onClick={() => safeNavigate('/support')}
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactExperts;
