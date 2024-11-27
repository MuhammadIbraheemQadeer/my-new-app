import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/techlogo.png'; // Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="TechPro Logo" className="logo-img" />
        <span className="logo-text"><span className='web'>Web</span>Technologies</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">About</a></li>
        <li><a href="#" className="navbar-link">Services</a></li>
        <li><a href="#" className="navbar-link">Contact</a></li>
        <li><a href="#" className="navbar-link">About Us</a></li>
      </ul>
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
    
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;

