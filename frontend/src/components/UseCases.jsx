import React from 'react';
import { 
  Hospital, GraduationCap, ShoppingCart, Car, Building2, 
  Briefcase, Shield, Headphones, Factory, FileText 
} from 'lucide-react';
import '../styles/usecases.css';

const useCases = [
  {
    icon: Hospital,
    industry: 'Healthcare',
    examples: ['Disease diagnosis', 'Drug discovery', 'Patient monitoring', 'Medical imaging analysis']
  },
  {
    icon: GraduationCap,
    industry: 'Education',
    examples: ['Personalized learning', 'Automated grading', 'Intelligent tutoring', 'Content creation']
  },
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    examples: ['Product recommendations', 'Chatbots', 'Inventory management', 'Fraud detection']
  },
  {
    icon: Car,
    industry: 'Transportation',
    examples: ['Autonomous vehicles', 'Route optimization', 'Traffic prediction', 'Fleet management']
  },
  {
    icon: Building2,
    industry: 'Real Estate',
    examples: ['Property valuation', 'Market analysis', 'Virtual tours', 'Lead qualification']
  },
  {
    icon: Briefcase,
    industry: 'Finance',
    examples: ['Fraud detection', 'Trading algorithms', 'Risk assessment', 'Customer service']
  },
  {
    icon: Shield,
    industry: 'Security',
    examples: ['Threat detection', 'Facial recognition', 'Anomaly detection', 'Access control']
  },
  {
    icon: Headphones,
    industry: 'Entertainment',
    examples: ['Content recommendations', 'Music generation', 'Game AI', 'Video editing']
  },
  {
    icon: Factory,
    industry: 'Manufacturing',
    examples: ['Quality control', 'Predictive maintenance', 'Supply chain', 'Robotics']
  },
  {
    icon: FileText,
    industry: 'Legal',
    examples: ['Document review', 'Contract analysis', 'Legal research', 'Case prediction']
  }
];

const UseCases = () => {
  return (
    <section className="usecases-section" id="use-cases">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Use Cases Across Industries</h2>
          <p className="section-description">
            See how artificial intelligence is transforming every sector of the economy
          </p>
        </div>
        
        <div className="usecases-grid">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div key={index} className="usecase-card">
                <div className="usecase-header">
                  <div className="usecase-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="usecase-title">{useCase.industry}</h3>
                </div>
                <ul className="usecase-list">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;