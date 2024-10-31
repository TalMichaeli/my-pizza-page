// src/components/Home.js
import React from 'react';
import Hero from './Hero';
import Menu from './Menu';
import Description from './Description';
import ContactForm from './ContactForm'; // Correct path
import './Home.css'; // Import a CSS file for styles

function Home() {
  return (
    <div>
      <Hero />
      <div className="content-container"> {/* New container for layout */}     
        
        <Description />
      </div>
      <ContactForm />
      <a href="tel:0526996037" className="call-button">
    התקשרו לשמוע עוד פרטים!
      </a>
      
    </div>
  );
}

export default Home;
