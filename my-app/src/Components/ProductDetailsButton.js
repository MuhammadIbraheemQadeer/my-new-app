import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDetailsButton({ productId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <button onClick={handleClick}>View Product {productId} Details</button>
  );
}

export default ProductDetailsButton;
