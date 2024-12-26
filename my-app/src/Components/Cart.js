import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const initialCartItems = [
    { id: '1', name: 'Laptop', price: 1000, quantity: 0, image: '/images/laptop.jpg' },
    { id: '2', name: 'Smartphone', price: 800, quantity: 0, image: '/images/smartphone.jpg' },
    { id: '3', name: 'Headphones', price: 200, quantity: 0, image: '/images/headphones.jpg' },
    { id: '4', name: 'Watch', price: 150, quantity: 0, image: '/images/watch.jpg' },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id && item.quantity > 0) {  
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Total Price: ${calculateTotal()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
