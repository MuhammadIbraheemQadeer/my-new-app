import React from 'react';
import '../styles/Specialitymenu.css';
import 'font-awesome/css/font-awesome.min.css';

function Specialitymenu({ item1, item2, item3 }) {
  return (
    <div className="speciality-menu">
      <h2>Our Speciality Menu</h2>
      <div className="menu-items">
        {/* Item 1 */}
        <div className="menu-item">
          <img src={item1.image} alt={item1.name} />
          <div className="item-details">
            <h3>{item1.name}</h3>
            <p>{item1.description}</p>
            <div className="menu-item-info">
              <p>{item1.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="menu-item">
          <img src={item2.image} alt={item2.name} />
          <div className="item-details">
            <h3>{item2.name}</h3>
            <p>{item2.description}</p>
            <div className="menu-item-info">
              <p>{item2.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="menu-item">
          <img src={item3.image} alt={item3.name} />
          <div className="item-details">
            <h3>{item3.name}</h3>
            <p>{item3.description}</p>
            <div className="menu-item-info">
              <p>{item3.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialitymenu;
