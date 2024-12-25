import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import Navbar from './Components/Navbar';
import User from './Components/User';
import ProductDetails from './Components/ProductDetails';
import Username from './Components/Username';


function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/Product-details" element={<ProductDetails/>}/>
      <Route path="/username/:name" element={<Username />} />
      </Routes>
      
    </Router>
  );
}
export default App;