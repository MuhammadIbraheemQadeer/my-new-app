import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Lab 10 - Routing with React Router</div>
                <ul className="navbar-menu">
                    <li><a href="/" className="navbar-link">Home</a></li>
                    <li><a href="/about" className="navbar-link">About</a></li>
                    <li><a href="/contact" className="navbar-link">Contact</a></li>
                    <li><a href="/user/24G-BCS552@student.agu.edu.pk" className="navbar-link">User Profile</a></li>
                    <li><a href="/username/24G-BCS552@student.agu.edu.pk" className="navbar-link">User Details</a></li>

                </ul>
        </nav>
    );
}
export default Navbar;
