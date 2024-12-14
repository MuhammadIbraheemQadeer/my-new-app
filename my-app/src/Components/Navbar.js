import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/KJ.png';  // Assuming your logo is stored in 'assets'

function Navbar() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="KJ Logo" />
          <h1 className="logo">KababJees Fried Chicken</h1>
        </div>
        
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#menu">Menu</a></li>
            <li className="navbar-item order">
              <a href="#order">
                <i className="fa fa-shopping-cart"></i> {/* Cart Icon */}
                <span>Order</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
