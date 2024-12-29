import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail1 from './Components/ProductDetail1';
import Home1 from './Components/Home1';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import Cart from './Components/Cart';
import Footer from './Components/Footer';  // Import Footer
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userprofile/:username" element={<UserProfile />} />
          <Route path="/product/:id" element={<ProductDetail1 />} />
        </Routes>
        <Footer />  
      </Router>
    </div>
  );
};

export default App;
