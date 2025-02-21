import React from 'react';
import Hero from '../components/Hero';
import ContactForm from './ContactForm'; // Correct path

const PrivateChef = () => {
  return (
    <div className="private-chef-container">
      <Hero text="שף פרטי לאירועים: טעמים בלתי נשכחים" />
      <div className="description">
        <p><strong>תפריט מותאם אישית</strong><br />
        אנו עובדים יחד עם כל לקוח על תפריט מותאם אישית שמתאים בצורה מושלמת לכל אירוע – החל ממנות עיקריות מלאות טעמים ועד קינוחים מפנקים שמסיימים את החוויה בצורה המתוקה ביותר
        </p>
        <p><strong>שירות מקצועי ואדיב</strong><br />
        הצוות שלנו מתמחה בהכנה והגשה של מנות עם תשומת לב מירבית לכל פרט. אנחנו כאן כדי לוודא שהאירוע שלכם יהיה לא רק טעים, אלא בלתי נשכח        </p>
        <p><strong>אירועים בכל הגדלים</strong><br />
        בין אם מדובר באירוע אינטימי או באירוע גדול ומרשים, אני כאן כדי להעניק לכם חוויה קולינרית שאין לה תחליף, שתפיץ סביבכם ריחות וטעמים שלא תשכחו        </p>
      </div>
      <a href="tel:0526996037" className="call-button">
      !התקשרו לשמוע עוד פרטים
      </a>
      <ContactForm />
    </div>
  );
};

export default PrivateChef;
