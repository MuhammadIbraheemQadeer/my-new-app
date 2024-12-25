import React from 'react';
import { useNavigate } from 'react-router-dom';
function ProductDetailsButton() {
const navigate = useNavigate();
const handleClick = () => {
navigate('/product-details');
};
return (
<button onClick={handleClick}>View Product Details</button>
);
}
export default ProductDetailsButton;