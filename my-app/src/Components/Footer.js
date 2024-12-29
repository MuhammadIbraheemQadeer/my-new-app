import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Our Store. All Rights Reserved.</p>
      <p className='links'>
        <Link to="/privacy-policy">Privacy Policy  </Link> | 
        <Link to="/terms">  Terms of Service</Link>
      </p>
    </footer>
  );
}

export default Footer;
