import React from 'react';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to My Website (:)</h1>
      <p className="landing-subtitle">
      At [WebTechnologies], we believe in creating seamless and engaging online experiences. Our mission is to provide you with the tools, resources, and inspiration to help you achieve your goals. Whether you're looking for innovative solutions, insightful content, or just a place to explore, you've come to the right spot.

Explore our services, get to know our team, and discover how we can assist you on your journey. Thank you for visiting, and we hope you enjoy your time here!
      </p>
      <div className="features-list">
          <div className="feature">
            <img src="/images/js.png" alt="Cloud Solutions" className="feature-icon" />
            <h3>JavaScript (JS)</h3>
            <h5>Definition:</h5>
            <p>JavaScript is a programming language that allows you to create dynamic, interactive effects and functionalities on web pages. It is a client-side scripting language that runs in the browser and is used for adding interactivity, controlling multimedia, and manipulating HTML and CSS elements.</p>
          </div>
          <div className="feature">
            <img src="/images/html.png" alt="App Development" className="feature-icon" />
            <h3>HyperText Markup Language (HTML)</h3>
            <h5>Definition: </h5>
            <p> HTML is the standard markup language used to create the structure and content of web pages. It is used to describe the elements on a web page, such as headings, paragraphs, images, links, forms, and other content.</p>
          </div>
          <div className="feature">
            <img src="/images/css.png" alt="AI & Automation" className="feature-icon" />
            <h3>Cascading Style Sheet (CSS)</h3>
            <h5>Definition: </h5>
            <p>CSS is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout, design, colors, fonts, and overall visual appearance of web pages.</p>
          </div>
        </div>
      <button className="landing-button">
        Learn More
      </button>

      <div className="form-container">
        <h2>Contact Us! </h2>
        <p>We will try our best to resolve your issue.</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
