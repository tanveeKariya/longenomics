import React from 'react';
import './TeamSection.css';

const TeamMemberCard = ({ name, title, isLarge = false }) => {
  // Generate a random ID for picsum.photos to get different images
  const randomId = Math.floor(Math.random() * 1000); 
  const largeImageUrl = `https://picsum.photos/id/${randomId}/300/300`;
  const smallImageUrl = `https://picsum.photos/id/${randomId}/200/200`;

  // Fallback placeholder in case the picsum.photos URL fails
  const fallbackLargePlaceholder = `https://placehold.co/300x300/2a2a2a/ffffff?text=${encodeURIComponent(name.replace(' ', '+'))}+Large`;
  const fallbackSmallPlaceholder = `https://placehold.co/200x200/2a2a2a/ffffff?text=${encodeURIComponent(name.replace(' ', '+'))}+Small`;

  const finalImageUrl = isLarge ? largeImageUrl : smallImageUrl;
  const onErrorFallback = isLarge ? fallbackLargePlaceholder : fallbackSmallPlaceholder;

  return (
    <div className={`team-member-card ${isLarge ? 'large-card' : 'small-card'}`}>
      <img
        src={finalImageUrl}
        alt={name}
        className="team-member-image"
        onError={(e) => { 
          e.target.onerror = null;
          e.target.src = onErrorFallback; 
        }}
      />
      <div className="team-member-overlay"></div>
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-title">{title}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    { name: 'Vikash Kumar', title: 'CEO', large: true },
    { name: 'Vittorio Cegliano', title: 'CTO', large: true },
    { name: 'Vittoria La Barbera', title: 'PhD, CSO' },
    { name: 'Pierre Schumacher', title: 'PhD, Head of Research' },
    { name: 'Isaac Zuabi', title: 'PhD, Head of AI' },
    { name: 'Yufei Zhang', title: 'PhD' },
    { name: 'Bruno Laurenza', title: 'CTO (Ex-Meta/Google)' },
    { name: 'Haizhou Zeng', title: 'PhD, AI Scientist' },
    { name: 'Andrea Previtera', title: 'PhD' },
    { name: 'Edoardo Bartocci', title: 'PhD, AI Scientist' },
    { name: 'Yogeshwari Babar', title: 'Research Engineer' },
    { name: 'Daein Asifash', title: 'Research Engineer' },
    { name: 'Eliy Hernández', title: 'MS, Operations' },
    { name: 'Bradley Alx', title: 'MBA, Business' },
  ];

  return (
    <div className="team-section-container">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>

      <div className="team-section-header">
        <h1 className="team-section-title">Meet Our Team</h1>
        <p className="team-section-description">
          The minds behind Longenomics' embodied intelligence revolution.
        </p>
      </div>

      <div className="team-members-grid-container">
        <div className="team-members-row large-members-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <TeamMemberCard key={index} {...member} isLarge={true} />
          ))}
        </div>

        <div className="team-members-grid">
          {teamMembers.slice(2).map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>

      <div className="team-section-footer">
        <p className="footer-intro">We are supported and championed by:</p>
        <p className="footer-names">
          Oliver Cameron, Shane Gu, Sherry Moore, Emo Todorov, Elvis Zhang, Andrew Yang,
          Ayana Bhalla, Bianca Majlori, Cebo Danckwerts, PPrime
        </p>
      </div>
    </div>
  );
};

export default TeamSection;