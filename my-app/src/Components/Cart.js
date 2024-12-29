import React, { useState } from 'react';
import '../styles/Cart.css';

function Cart() {
  const product1 = {
    title: "Wireless Headphones",
    description1: "Noise-cancelling",
    description2: "over-ear headphones",
    price: 99.99,
    imageUrl: "../images/headphones.jpg",
  };

  const product2 = {
    title: "Smart Watch",
    description1: "Water Proof",
    description2: "Unbreakable glass",
    price: 249.99,
    imageUrl: "../images/watch.jpg",
  };

  const product3 = {
    title: "Laptop",
    description1: "Touch Screen",
    description2: "Light weight",
    price: 999.99,
    imageUrl: "../images/laptop.jpg",
  };

  const product4 = {
    title: "Smart Phone",
    description1: "Amoled display",
    description2: "Fast charging",
    price: 499.99,
    imageUrl: "../images/smartphone.jpg",
  };

  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);
  const [quantity4, setQuantity4] = useState(1);

  const totalPrice =
    quantity1 * product1.price +
    quantity2 * product2.price +
    quantity3 * product3.price +
    quantity4 * product4.price;

  const incrementQuantity = (product) => {
    if (product === 1) setQuantity1(quantity1 + 1);
    else if (product === 2) setQuantity2(quantity2 + 1);
    else if (product === 3) setQuantity3(quantity3 + 1);
    else if (product === 4) setQuantity4(quantity4 + 1);
  };

  const decrementQuantity = (product) => {
    if (product === 1 && quantity1 > 0) setQuantity1(quantity1 - 1);
    if (product === 2 && quantity2 > 0) setQuantity2(quantity2 - 1);
    if (product === 3 && quantity3 > 0) setQuantity3(quantity3 - 1);
    if (product === 4 && quantity4 > 0) setQuantity4(quantity4 - 1);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
      </div>

      <div className="cart-item-container">
        {quantity1 > 0 && (
          <div className="cart-item">
            <div className="product-card">
              <img src={product1.imageUrl} alt={product1.title} className="product-image" />
              <div className="product-details">
                <h3>{product1.title}</h3>
                <div className="list-item">
                  <ul>
                    <li>{product1.description1}</li>
                    <li>{product1.description2}</li>
                  </ul>
                </div>
                <p>Price: ${product1.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(1)}>-</button>
                  <span>{quantity1}</span>
                  <button onClick={() => incrementQuantity(1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {quantity2 > 0 && (
          <div className="cart-item">
            <div className="product-card">
              <img src={product2.imageUrl} alt={product2.title} className="product-image" />
              <div className="product-details">
                <h3>{product2.title}</h3>
                <div className="list-item">
                  <ul>
                    <li>{product2.description1}</li>
                    <li>{product2.description2}</li>
                  </ul>
                </div>
                <p>Price: ${product2.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(2)}>-</button>
                  <span>{quantity2}</span>
                  <button onClick={() => incrementQuantity(2)}>+</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {quantity3 > 0 && (
          <div className="cart-item">
            <div className="product-card">
              <img src={product3.imageUrl} alt={product3.title} className="product-image" />
              <div className="product-details">
                <h3>{product3.title}</h3>
                <div className="list-item">
                  <ul>
                    <li>{product3.description1}</li>
                    <li>{product3.description2}</li>
                  </ul>
                </div>
                <p>Price: ${product3.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(3)}>-</button>
                  <span>{quantity3}</span>
                  <button onClick={() => incrementQuantity(3)}>+</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {quantity4 > 0 && (
          <div className="cart-item">
            <div className="product-card">
              <img src={product4.imageUrl} alt={product4.title} className="product-image" />
              <div className="product-details">
                <h3>{product4.title}</h3>
                <div className="list-item">
                  <ul>
                    <li>{product4.description1}</li>
                    <li>{product4.description2}</li>
                  </ul>
                </div>
                <p>Price: ${product4.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(4)}>-</button>
                  <span>{quantity4}</span>
                  <button onClick={() => incrementQuantity(4)}>+</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="total">
        <h3>Total: <span className='dollar'>$</span><span>{totalPrice.toFixed(2)}</span></h3>
      </div>
    </div>
  );
}

export default Cart;
