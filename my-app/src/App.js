import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import ProductDetail from './Components/ProductDetail';
import UserProfile from './Components/UserProfile';
import Cart from './Components/Cart';
import './App.css';

const products = [
  { id: '1', name: 'Laptop', price: 1000, image: 'laptop.jpg', description: 'High performance laptop' },
  { id: '2', name: 'Smartphone', price: 800, image: 'smartphone.jpg', description: 'Latest smartphone' },
  { id: '3', name: 'Headphones', price: 200, image: 'headphones.jpg', description: 'Noise cancelling headphones' },
  { id: '4', name: 'Watch', price: 150, image: 'watch.jpg', description: 'Smart fitness watch' }
];

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
