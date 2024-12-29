import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home1.css';

function Home1 () {
  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <p>Browse our products below:</p>
      <ul>
        <li><Link to="/product/1">Wireless Headphones</Link></li>
        <li><Link to="/product/2">Smart Watch</Link></li>
        <li><Link to="/product/3">Laptop</Link></li>
        <li><Link to="/product/4">Smart Phone</Link></li>
      </ul>

    </div>
  );
};

export default Home1;
