import React from 'react';
import { Target, Lightbulb, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import '../styles/capabilities.css';

const capabilities = [
  {
    icon: Target,
    title: 'Pattern Recognition',
    description: 'Identify complex patterns in data that humans might miss, enabling better predictions and insights.'
  },
  {
    icon: Lightbulb,
    title: 'Intelligent Decision Making',
    description: 'Process vast amounts of information to make informed decisions quickly and accurately.'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Analyze and respond to data in milliseconds, enabling instant insights and actions.'
  },
  {
    icon: Shield,
    title: 'Continuous Learning',
    description: 'Improve performance over time by learning from new data and experiences.'
  },
  {
    icon: Globe,
    title: 'Multi-modal Understanding',
    description: 'Process and understand multiple types of data including text, images, audio, and video.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes based on historical data and patterns.'
  }
];

const AICapabilities = () => {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What AI Can Do</h2>
          <p className="section-description">
            Discover the powerful capabilities that make artificial intelligence transformative
          </p>
        </div>
        
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="capability-card">
                <div className="capability-icon">
                  <Icon size={32} />
                </div>
                <h3 className="capability-title">{capability.title}</h3>
                <p className="capability-description">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;