import React from 'react';
import '../styles/Landingpage.css';

function Landingpage() {
  return (
    <div className="landing-page">
      <div className="intro-text">
        <h1>Taste the <span className='heading'>KababJees</span><br></br> Magic</h1>
        <p>
          Crispy, Delicious Chicken that Keeps You Coming Back!
        </p>
        <button className="order-now-btn">
          <i className="fa fa-shopping-cart"></i> Order Now
        </button>
      </div>
      <div className="intro-image">
        <img src='/images/KJLP.jpg' alt="Kababjeezss Magic" />
      </div>
    </div>
  );
}

export default Landingpage;
