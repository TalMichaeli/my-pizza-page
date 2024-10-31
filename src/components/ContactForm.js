// src/components/ContactForm.js

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'; // Import the CSS for styling

function ContactForm() {
  const [state, handleSubmit] = useForm("xbljdzkz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contact-form-container"> {/* Container for form and image */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="Title">הצעת מחיר בקלות</h2>
        
        <label htmlFor="name">שם פרטי</label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />
        
        <label htmlFor="email">כתובת אימייל</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <label htmlFor="phone">מספר פאלפון</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
        />

        <label htmlFor="message">כמות אנשים</label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

      <div className="image-container">
        <img src={require('../photos/NeapolitanPizza.jpeg')} alt="Pizza Image" className="hover-image" />
      </div>
      
   
       
      
      
    </div>
    
  );
}

export default ContactForm;
