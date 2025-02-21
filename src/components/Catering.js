import React from 'react';
import Hero from '../components/Hero';
import ContactForm from './ContactForm';

const Catering = () => {
  return (
    <div className="pizza-catering-container">
      <Hero text="קייטרינג פיצה - לכאלה שמבינים עניין" />
      <div className="description">
        <p>
          <strong>קייטרינג פיצה לאירוע הבא שלכם</strong><br />
          רוצים להפוך את האירוע שלכם לחוויה בלתי נשכחת? קייטרינג הפיצות שלנו ירים את האירוע לשיאים חדשים! עם מגוון פיצות מטורפות, מותאמות אישית לכל טעם ותקציב, אנחנו מבטיחים שהאורחים שלכם לא יפסיקו לדבר על האירוע עוד הרבה אחרי שיסתיים. בין אם מדובר בחתונה מפוארת, מסיבת יום הולדת או אירוע עסקי יוקרתי, הפיצות שלנו יהיו הכוכב של הערב        </p>
      </div>
      <ContactForm />
      <a href="tel:0526996037" className="call-button">
      !התקשרו לשמוע עוד פרטים
      </a>
    </div>
  );
};

export default Catering;
