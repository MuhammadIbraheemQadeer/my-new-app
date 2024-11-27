import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="#" className="footer-link">Privacy Policy</a></li>
          <li><a href="#" className="footer-link">Terms of Service</a></li>
          <li><a href="#" className="footer-link">FAQ</a></li>
        </ul>
      </div>

      <div className="footer-socials">
        <ul>
          <li><a href="#" className="social-link">Facebook</a></li>
          <li><a href="#" className="social-link">Twitter</a></li>
          <li><a href="#" className="social-link">Instagram</a></li>
          <li><a href="#" className="social-link">LinkedIn</a></li>
          <li><a href="#" className="social-link">Github</a></li>
        </ul>
      </div>

      <div className="footer-copy">
        <p>&copy; 2024 TechPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

