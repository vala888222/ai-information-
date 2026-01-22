import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">AI INFO</h3>
            <p className="footer-description">
              Your comprehensive resource for understanding artificial intelligence and its applications.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About AI</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#use-cases">Use Cases</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Learning Paths</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link"><Github size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 AI INFO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;