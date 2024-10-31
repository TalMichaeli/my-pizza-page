import React from 'react';
import './Hero.css'; // Ensure you have a CSS file for styling

function Hero({ text }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>{text}</h2> {/* Display the text passed as a prop */}
      </div>
    </section>
  );
}

export default Hero;
