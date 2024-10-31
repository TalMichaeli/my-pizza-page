import React from 'react';
import Hero from '../components/Hero';
import ContactForm from './ContactForm';

const Catering = () => {
  return (
    <div className="pizza-catering-container">
      <Hero text="קייטרינג פיצה - לכאלה שמבינים עניין" />
      <div className="description">
        <p>
          <strong>אין בית בישראל שלא אוהב פיצה!</strong><br />
          תדפקו על כל דלת בישראל ב-8 בערב וב-50% מהמקרים הילדים ייצרחו "יש הפיצה הגיעה!".
        </p>
        <p>
          <strong>המאכל האולטימטיבי</strong><br />
          הוא טעים, מהיר, מזין, וגורם לאושר.
        </p>
        <p>
          <strong>קייטרינג פיצה לאירוע הבא שלכם</strong><br />
          יגרום לאירוע להפוך לאירוע שייזכר להרבה זמן, בזכות הפיצות המטורפות שלנו שישאירו את כולם בשמיים.
        </p>
      </div>
      <ContactForm />
      <a href="tel:0526996037" className="call-button">
    התקשרו לשמוע עוד פרטים!
      </a>
    </div>
  );
};

export default Catering;
