import React from 'react';
import Hero from '../components/Hero';
import ContactForm from './ContactForm'; // Correct path

const PrivateChef = () => {
  return (
    <div className="private-chef-container">
      <Hero text="שף פרטי לאירועים: טעמים בלתי נשכחים!" />
      <div className="description">
        <p><strong>הגשמת חוויות קולינריות</strong><br />
          דמיינו לעצמכם שף פרטי שמגיע לאירוע שלכם, מוכן להציע לכם חוויה ייחודית וטעימה. אנו מציעים מגוון מנות מותאמות אישית שיתאימו בדיוק להעדפותיכם.
        </p>
        <p><strong>שירות מקצועי ואדיב</strong><br />
          הצוות שלנו מתמחה בהכנה והגשה של מנות gourmet, עם תשומת לב לכל פרט קטן. נוודא שהאירוע שלכם יהיה בלתי נשכח.
        </p>
        <p><strong>תפריט מותאם אישית</strong><br />
          אנו עובדים יחד עם הלקוחות שלנו על תפריט מותאם אישית שמתאים לכל אירוע, החל מהכנת מנות עיקריות ועד קינוחים מפנקים.
        </p>
        <p><strong>אירועים בכל הגדלים</strong><br />
          בין אם מדובר באירוע קטן או גדול, השף הפרטי שלנו כאן כדי לספק לכם חוויה קולינרית שאין לה תחליף!
        </p>
      </div>
      <ContactForm />
      <a href="tel:0526996037" className="call-button">
    התקשרו לשמוע עוד פרטים!
      </a>
    </div>
  );
};

export default PrivateChef;
