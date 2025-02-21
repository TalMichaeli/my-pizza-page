// src/components/ContactUs.js
import React from 'react';
import ContactForm from './ContactForm'; // Import the ContactForm component
import './ContactUs.css'; // Optional: Create a CSS file for styling if needed

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>צור קשר</h1>
      <p>אם יש לכם שאלות או בקשות, אל תהססו ליצור קשר! נשמח לעזור לכם בכל דרך אפשרית.</p>
      
      {/* Include the ContactForm component */}
      <div>
      <ContactForm />

    </div>
    <a href="tel:0526996037" className="call-button">
      !התקשרו לשמוע עוד פרטים
      </a>
    </div>
    
  );
};

export default ContactUs;
