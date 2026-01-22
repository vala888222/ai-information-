import React from 'react';
import { Brain, MessageSquare, Eye, Music, Code, Palette, Database, Cpu, Network, Workflow } from 'lucide-react';
import '../styles/categories.css';

const categories = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Algorithms that learn from data to make predictions and decisions without explicit programming.',
    color: 'purple'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Understanding, interpreting, and generating human language for communication and analysis.',
    color: 'blue'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Enabling machines to interpret and understand visual information from the world.',
    color: 'orange'
  },
  {
    icon: Palette,
    title: 'Generative AI',
    description: 'Creating new content including text, images, music, and code using advanced AI models.',
    color: 'pink'
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    description: 'Neural networks with multiple layers that learn complex patterns from vast amounts of data.',
    color: 'green'
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Computing systems inspired by biological neural networks that process information.',
    color: 'grey'
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Extracting insights and knowledge from structured and unstructured data using AI.',
    color: 'purple'
  },
  {
    icon: Code,
    title: 'AI Programming',
    description: 'Frameworks and tools for building, training, and deploying AI models and applications.',
    color: 'blue'
  },
  {
    icon: Music,
    title: 'Audio AI',
    description: 'Speech recognition, synthesis, and audio generation powered by artificial intelligence.',
    color: 'orange'
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Using AI to automate complex tasks, workflows, and decision-making processes.',
    color: 'pink'
  }
];

const AICategories = () => {
  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Categories</h2>
          <p className="section-description">
            Explore the diverse landscape of artificial intelligence technologies and their applications
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className={`category-card accent-${category.color}`}>
                <div className="category-icon">
                  <Icon size={28} />
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AICategories;