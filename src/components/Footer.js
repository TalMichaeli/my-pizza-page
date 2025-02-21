// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <Link to="/ContactUs" className="footer-button">צור קשר</Link>
        <Link to="/Info" className="footer-button">מי אנחנו</Link>
        <Link to="/PhotoAlbum" className="footer-button">אלבום תמונות</Link>
      </div>
      <div className='text'>
        
      <p>© כל הזכויות שמורות La Pizza 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
