import React from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="about">
      <div className="hero-content">
        <div className="hero-announcement">
          <Sparkles size={14} />
          <span>Exploring the Future of Intelligence</span>
        </div>
        
        <h1 className="hero-title">
          Comprehensive Guide to
          <br />
          Artificial Intelligence
        </h1>
        
        <p className="hero-subtitle">
          Discover everything about AI - from foundational concepts to cutting-edge applications.
          Learn how artificial intelligence is transforming our world.
        </p>
        
        <div className="hero-stats">
          <div className="stat-card">
            <Brain size={24} />
            <div className="stat-content">
              <div className="stat-number">10+</div>
              <div className="stat-label">AI Categories</div>
            </div>
          </div>
          <div className="stat-card">
            <Zap size={24} />
            <div className="stat-content">
              <div className="stat-number">50+</div>
              <div className="stat-label">Use Cases</div>
            </div>
          </div>
          <div className="stat-card">
            <Sparkles size={24} />
            <div className="stat-content">
              <div className="stat-number">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;