import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ecommercelogo.jpg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo-name'>
      <img src={logo} alt='logo' className='logo'/>
      <h2><span className='E'>E</span><span className='dash'>-</span><span className='commerce'>Commerce</span> <span className='website'>Website</span></h2>
      </div>
      <div className='nav-items'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart"> Cart</Link></li>
        <li><Link to="/userprofile/ibraheem">User</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
