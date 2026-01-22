import React, { useState } from 'react';
import { Menu, X, MessageSquare, Mic } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AICategories from '../components/AICategories';
import AICapabilities from '../components/AICapabilities';
import UseCases from '../components/UseCases';
import AIAssistant from '../components/AIAssistant';
import Footer from '../components/Footer';
import '../styles/home.css';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="home-container">
      {/* Header Navigation */}
      <header className="header-nav">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-text">AI INFO</div>
          </div>
          
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => scrollToSection('about')} className="nav-link">About AI</button>
            <button onClick={() => scrollToSection('categories')} className="nav-link">Categories</button>
            <button onClick={() => scrollToSection('capabilities')} className="nav-link">Capabilities</button>
            <button onClick={() => scrollToSection('use-cases')} className="nav-link">Use Cases</button>
          </nav>
          
          <div className="nav-actions">
            <button onClick={() => setShowAssistant(!showAssistant)} className="btn-primary">
              <MessageSquare size={16} />
              <span>AI Assistant</span>
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AICategories />
        <AICapabilities />
        <UseCases />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      {showAssistant && (
        <AIAssistant onClose={() => setShowAssistant(false)} />
      )}
    </div>
  );
};

export default Home;