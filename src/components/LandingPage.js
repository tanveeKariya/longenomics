// import React from 'react';
// import './LandingPage.css'; // Import the CSS file
// import HealthspanSection from './HealthspanSection.jsx'; 
// import ContactExperts from './ContactExperts.jsx';
// import Footer from './Footer.jsx';
// // Import all necessary images from src/assets
// import LongenomicsLogo from '../assets/longenomics-logo.png';
// import TabImage from '../assets/tab.png';
// import PersonalizedTimelineImage from '../assets/personalized-timeline.png';
// import UnifiedDataImage from '../assets/unified-data.png';
// import AIRiskInsightsImage from '../assets/ai-risk-insights.jpg';
// import TailoredHealthActionsImage from '../assets/tailored-health-actions.jpg';
// import img from '../assets/image.png'

// const LandingPage = () => {
  
//   const testimonials = [
//     {
//       avatar: img,
//       name: 'Avery Lin',
//       company: 'HealthSync',
//       quote: 'The health timeline gave me clear, actionable steps for prevention.',
//       tag: 'HealthSync',
//     },
//     {
//       avatar: img,
//       name: 'Jordan Ellis',
//       company: 'WellFusion',
//       quote: 'Unified data from wearables and labs made my health progress easy to track.',
//       tag: 'WellFusion',
//     },
//     {
//       avatar: img,
//       name: 'Morgan Shaw',
//       company: 'InsightVitals',
//       quote: 'AI insights helped me prioritize preventive care in my routine.',
//       tag: 'InsightVitals',
//     },
//     {
//       avatar: img,
//       name: 'Taylor Reed',
//       company: 'BioTrack',
//       quote: 'Digital twin features keep me focused on my wellness goals.',
//       tag: 'BioTrack',
//     },
//     {
//       avatar: img,
//       name: 'Casey Drew',
//       company: 'OptiWell',
//       quote: 'I finally have a long-term, personalized health plan.',
//       tag: 'OptiWell',
//     },
//     {
//       avatar: img,
//       name: 'Riley Fox',
//       company: 'PulseMetrics',
//       quote: 'Centralized health data streamlined my daily routine.',
//       tag: 'PulseMetrics',
//     },
//     {
//       avatar: img,
//       name: 'Skyler James',
//       company: 'LifeSpanIQ',
//       quote: 'Recommendations are clear, relevant, and easy to follow.',
//       tag: 'LifeSpanIQ',
//     },
//     {
//       avatar: img,
//       name: 'Emerson Blake',
//       company: 'CoreVitals',
//       quote: 'Collaboration tools make sharing progress with my care team simple.',
//       tag: 'CoreVitals',
//     },
//   ];
//   return (
//     <div className="lp-container">
//       {/* Header Section */}
//       <header className="lp-header">
//         <div className="lp-logo-nav">
//           <div className="lp-logo-wrapper">
//             <img src={LongenomicsLogo} alt="Longenomics Logo" className="lp-logo" />
//           </div>
//           <nav className="lp-nav-links">
//             <a href="#platform" className="lp-nav-item">Platform</a>
//             <a href="#about" className="lp-nav-item">About</a>
//             <a href="#blog" className="lp-nav-item">Blog</a>
//             <a href="#support" className="lp-nav-item">Support</a>
//           </nav>
//         </div>
//         <button className="lp-button lp-header-join-button">Join</button>
//       </header>

//       {/* Hero Section */}
//       <main className="lp-hero-section">
//         <h1 className="lp-hero-title">Your Gamified Digital Twin for Better Health</h1>
//         <p className="lp-hero-subtitle">
//           Unified health data. Predictive insights. Personalized longevity guidance for your future.
//         </p>
//         <div className="lp-cta-buttons">
//           <button className="lp-button lp-primary-cta">Join now</button>
//           <button className="lp-button lp-secondary-cta">See features</button>
//         </div>
//       </main>

//       {/* Tablet Showcase Section */}
//       <section className="lp-showcase-section">
//         <div className="lp-showcase-image-wrapper">
//           <img src={TabImage} alt="HR Dashboard on Tablet" className="lp-tab-image" />
//         </div>
//       </section>

//       {/* Longevity Mentor / Features Section */}
//       <section className="lp-longevity-mentor-section">
//         <div className="lp-section-header">
//           <h2 className="lp-section-title">Your AI-powered longevity mentor</h2>
//           <h3 className="lp-section-subtitle">Personalized, predictive health guidance</h3>
//           <p className="lp-section-description">
//             Unify your health data—wearables, labs, and habits—into a single digital twin. Get predictive insights and clear milestones for a proactive approach to long-term well-being.
//           </p>
//         </div>

//         <div className="lp-feature-cards-grid">
//           {/* Feature Card 1 */}
//           <div className="lp-feature-card">
//             <h4 className="lp-card-title">Personalized health timeline</h4>
//             <div className="lp-card-image-wrapper">
//               <img src={PersonalizedTimelineImage} alt="Personalized health timeline" className="lp-card-image" />
//             </div>
//           </div>

//           {/* Feature Card 2 */}
//           <div className="lp-feature-card">
//             <h4 className="lp-card-title">Unified data from wearables & labs</h4>
//             <div className="lp-card-image-wrapper">
//               <img src={UnifiedDataImage} alt="Unified data from wearables and labs" className="lp-card-image" />
//             </div>
//           </div>

//           {/* Feature Card 3 */}
//           <div className="lp-feature-card">
//             <h4 className="lp-card-title">AI-driven risk and milestone insights</h4>
//             <div className="lp-card-image-wrapper">
//               <img src={AIRiskInsightsImage} alt="AI-driven risk and milestone insights" className="lp-card-image" />
//             </div>
//           </div>

//           {/* Feature Card 4 */}
//           <div className="lp-feature-card">
//             <h4 className="lp-card-title">Tailored health actions & goals</h4>
//             <div className="lp-card-image-wrapper">
//               <img src={TailoredHealthActionsImage} alt="Tailored health actions and goals" className="lp-card-image" />
//             </div>
//           </div>
//         </div>
//       </section>

//        <section className="lp-dark-value-section">
//         <div className="lp-value-blocks-grid">
//           {/* Left Value Block */}
//           <div className="lp-value-block">
//             <div className="lp-value-image-wrapper">
//               <img src={TabImage} alt="Collaborative precision health engine" className="lp-value-image" />
//             </div>
//             <h3 className="lp-value-title">Collaborative precision health engine</h3>
//             <p className="lp-value-description">
//               Unify research, data, and insights for predictive, personalized preventive care. Accelerate innovation with secure, integrated collaboration.
//             </p>
//             <button className="lp-button lp-value-button lp-discover-button">Discover</button>
//           </div>

//           {/* Right Value Block */}
//           <div className="lp-value-block">
//             <div className="lp-value-image-wrapper">
//               <img src={TabImage} alt="Motivational health, gamified" className="lp-value-image" />
//             </div>
//             <h3 className="lp-value-title">Motivational health, gamified</h3>
//             <p className="lp-value-description">
//               Drive healthy habits with tailored challenges, progress tracking, and rewards. Stay engaged and proactive on your wellness path.
//             </p>
//             <button className="lp-button lp-value-button lp-join-button">Join now</button>
//           </div>
//         </div>
//       </section>
//       {/* Pricing Section */}
//       <section className="lp-pricing-section">
//         <div className="lp-pricing-cards-grid">
//           {/* Starter Card */}
//           <div className="lp-pricing-card">
//             <div className="lp-price-header">
//               <h4 className="lp-price">$0</h4>
//               <p className="lp-price-description">Free forever</p>
//             </div>
//             <h5 className="lp-plan-name">Starter</h5>
//             <p className="lp-plan-tagline">Track basics with AI insights.</p>
//             <button className="lp-button lp-pricing-button lp-primary-pricing-button">Get started</button>
//             <div className="lp-includes-section">
//               <h6 className="lp-includes-header">INCLUDES</h6>
//               <ul className="lp-includes-list">
//                 <li><span className="lp-check-icon"></span>Personal health dashboard</li>
//                 <li><span className="lp-check-icon"></span>Wearable sync</li>
//                 <li><span className="lp-check-icon"></span>AI health tips</li>
//               </ul>
//             </div>
//           </div>

//           {/* Core Card */}
//           <div className="lp-pricing-card">
//             <div className="lp-price-header">
//               <h4 className="lp-price">$9</h4>
//               <p className="lp-price-description">Per month</p>
//             </div>
//             <h5 className="lp-plan-name">Core</h5>
//             <p className="lp-plan-tagline">Deeper analytics and custom goals.</p>
//             <button className="lp-button lp-pricing-button lp-primary-pricing-button">Upgrade</button>
//             <div className="lp-includes-section">
//               <h6 className="lp-includes-header">INCLUDES</h6>
//               <ul className="lp-includes-list">
//                 <li><span className="lp-check-icon"></span>All Starter features</li>
//                 <li><span className="lp-check-icon"></span>Lab data sync</li>
//                 <li><span className="lp-check-icon"></span>Custom milestones</li>
//                 <li><span className="lp-check-icon"></span>Priority support</li>
//               </ul>
//             </div>
//           </div>

//           {/* Pro Card */}
//           <div className="lp-pricing-card">
//             <div className="lp-price-header">
//               <h4 className="lp-price">$19</h4>
//               <p className="lp-price-description">Per month</p>
//             </div>
//             <h5 className="lp-plan-name">Pro</h5>
//             <p className="lp-plan-tagline">Full platform for teams & orgs.</p>
//             <button className="lp-button lp-pricing-button lp-secondary-pricing-button">Contact</button>
//             <div className="lp-includes-section">
//               <h6 className="lp-includes-header">INCLUDES</h6>
//               <ul className="lp-includes-list">
//                 <li><span className="lp-check-icon"></span>All Core features</li>
//                 <li><span className="lp-check-icon"></span>Team collaboration</li>
//                 <li><span className="lp-check-icon"></span>AI risk prediction</li>
//                 <li><span className="lp-check-icon"></span>Advanced reporting</li>
//                 <li><span className="lp-check-icon"></span>Account manager</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="lp-healthspan-section">
//         {/* Decorative Images */}
//         <div className="lp-healthspan-image-top-right">
//           <img src={TabImage} alt="Tablet with health data" />
//         </div>
//         <div className="lp-healthspan-image-bottom-left">
//           <img src={TabImage} alt="Medical graph on screen" />
//         </div>

//         {/* Main Content */}
//         <div className="lp-healthspan-content">
//           <h2 className="lp-healthspan-title">Take charge of your healthspan</h2>
//           <p className="lp-healthspan-description">Unify your health data for actionable, AI-powered insights. Track wearables, labs, and habits in one timeline. Get personalized recommendations and stay ahead with predictive, preventive care.</p>
//           <button className="lp-button lp-healthspan-button">Join now</button>
//         </div>
//       </section>
//  <section className="lp-user-stories-section">
//         <div className="lp-section-header lp-user-stories-header">
//           <p className="lp-user-stories-subtitle">USER STORIES</p>
//           <h2 className="lp-section-title lp-user-stories-title">Personalized health, proven results</h2>
//           <p className="lp-section-description lp-user-stories-description">See how professionals use data-driven insights to improve their long-term health.</p>
//         </div>
//         <div className="lp-testimonial-cards-grid">
//           {testimonials.map((testimonial, index) => (
//             <div className="lp-testimonial-card" key={index}>
//               <div className="lp-testimonial-header">
//                 <img src={testimonial.avatar} alt={testimonial.name} className="lp-testimonial-avatar" />
//                 <div className="lp-testimonial-info">
//                   <h4 className="lp-testimonial-name">{testimonial.name}</h4>
//                   <p className="lp-testimonial-company">{testimonial.company}</p>
//                 </div>
//               </div>
//               <p className="lp-testimonial-quote">{testimonial.quote}</p>
//               <p className="lp-testimonial-tag">{testimonial.tag}</p>
//             </div>
//           ))}
//         </div>
//       </section>
     

//       {/* NEW: FAQ Section */}
//       <section className="lp-faq-section">
//         <div className="lp-section-header lp-faq-header">
//           <p className="lp-faq-subtitle">FAQ</p>
//           <h2 className="lp-section-title lp-faq-title">Your longevity, clearly explained</h2>
//           <p className="lp-section-description lp-faq-description">Get straightforward answers about digital twins, AI insights, and personalized health data.</p>
//         </div>
//         <div className="lp-faq-items-container">
//           <div className="lp-faq-item">
//             <h4 className="lp-faq-question">What is a health digital twin?</h4>
//             <p className="lp-faq-answer">A health digital twin is a virtual model of your body, built from your wearable, lab, and lifestyle data. It helps track and predict your health over time.</p>
//           </div>
//           <div className="lp-faq-item">
//             <h4 className="lp-faq-question">How does AI tailor my insights?</h4>
//             <p className="lp-faq-answer">AI reviews your health data and applies proven rules to deliver personalized recommendations and risk assessments for your wellness.</p>
//           </div>
//           <div className="lp-faq-item">
//             <h4 className="lp-faq-question">Which data sources can I use?</h4>
//             <p className="lp-faq-answer">Supported sources include wearables, lab results, and behavior tracking. This combined data gives a complete view for better guidance.</p>
//           </div>
//           <div className="lp-faq-item">
//             <h4 className="lp-faq-question">How are health tips created?</h4>
//             <p className="lp-faq-answer">Tips are generated using AI analysis and established health guidelines, ensuring advice is both personal and evidence-based.</p>
//           </div>
//         </div>
//         <a href="#" className="lp-faq-contact-link">Get in touch <span className="lp-arrow-right">→</span></a>
//       </section>
//  <HealthspanSection />
//  <ContactExperts />
//           <Footer />  
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import './LandingPage.css'; // Keep this for overall layout or common styles if any
import Header from './Header.jsx';
import HeroSection from './HeroSection.jsx';
import TabletShowcase from './TabletShowcase.jsx';
import LongevityMentor from './LongevityMentor.jsx';
import ValueBlocksSection from './ValueBlocksSection.jsx';
import PricingSection from './PricingSection.jsx';
import HealthspanSection from './HealthspanSection.jsx';
import UserStories from './UserStories.jsx'; // New import
import FAQSection from './FAQSection.jsx'; // New import
import ContactExperts from './ContactExperts.jsx';
import HealthIntelligence from './HealthIntelligence.jsx'; // New import
import Footer from './Footer.jsx';

// Note: Individual components will handle their own image imports.
// We remove the global image imports from here.

const LandingPage = () => {
  return (
    <div className="lp-container">
      <Header />
      <HeroSection />
      <TabletShowcase />
      <LongevityMentor />
      <ValueBlocksSection />
      <PricingSection />
      <HealthspanSection />
      <UserStories />
      <FAQSection />
      <HealthIntelligence />
      <ContactExperts />
      <Footer />
    </div>
  );
};

export default LandingPage;