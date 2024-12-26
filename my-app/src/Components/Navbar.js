import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/ecommercelogo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo-img'>
      <img src={logo} alt='logo'/>
      <h1 className='logo'>E-commerce Website</h1>
      </div>
      <div className='nav-item'>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/user/ibraheem">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
