import React from 'react';
import ProductDetailsButton from './ProductDetailsButton'; // Import the new button
import '../styles/Home.css';

const Home = ({ products }) => {
  return (
    <div className="home">
      <h1>Welcome to the E-Commerce Store</h1>
      <p>Explore our product catalog!</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <ProductDetailsButton productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
