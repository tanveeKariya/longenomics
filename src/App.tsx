import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DashboardSection from './components/DashboardSection';
import FeaturesSection from './components/FeaturesSection';
import PlatformSection from './components/PlatformSection';
import PricingSection from './components/PricingSection';
import HealthspanSection from './components/HealthspanSection';
import UserStories from './components/UserStories';
import FAQSection from './components/FAQSection';
import HealthIntelligence from './components/HealthIntelligence';
import ContactExperts from './components/ContactExperts';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import ContactPage from './components/ContactPage';
import Dashboard from './components/Dashboard'; 
function HomePage() {
  return (
    <>
      <HeroSection />
      
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<ComingSoon title="About" />} />
        <Route path="/careers" element={<ComingSoon title="Careers" />} />
        <Route path="/support" element={<ComingSoon title="Support" />} />
        <Route path="/join" element={<ComingSoon title="Join Now" />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;