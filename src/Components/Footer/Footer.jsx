import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Krishna Garg</h3>
          <p>
           A Full Stack Developer passionate about building beautiful and functional web apps.
          </p>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Krishna Garg. All rights reserved.</p>
      </div>
    </footer>
  );
}
