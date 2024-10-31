import React from 'react';
import Hero from '../components/Hero';
import ContactForm from './ContactForm';

const PizzaInTheOven = () => {
  return (
    <div className="pizza-in-oven-container">
    <Hero text="פיצות בטאבון לכל סוגי האירועים" />
    <div className="description">
      <p>
        <strong>מסוגלים לעבוד באירועים בכל הגדלים.</strong>
      </p>
      <p>
        <strong>אפייה במקום</strong> – הפיצה יוצאת רותחת לוהטת אמאל'ה.
      </p>
      <p>
        <strong>100% גבינת מוצרלה אמיתית</strong>, לא מתעסקים עם גבינה צהובה.
      </p>
      <p>
        <strong>תוספות לבחירתכם.</strong>
      </p>
      <p>
        <strong>חומרי הגלם האיכותיים ביותר</strong>, כל עגבניה נבחרה בזכוכית מגדלת.
      </p>
      <p>
        <strong>תוספות מיוחדות:</strong> ריבת בצל, ריבת עגבניות שרי, קונפי ארטישוק, שום קונפי ועוד.
      </p>
    </div>
    <ContactForm />
      <a href="tel:0526996037" className="call-button">
    התקשרו לשמוע עוד פרטים!
      </a>
  </div>
  );
};

export default PizzaInTheOven;
