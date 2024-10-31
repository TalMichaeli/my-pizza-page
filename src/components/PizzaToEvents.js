import React from 'react';
import Hero from './Hero';
import ContactForm from './ContactForm'; // Import the ContactForm component
import './PizzaToEvents.css'; // Import a CSS file for styles

const PizzaToEvents = () => {
  return (
    <div className="pizza-to-events-container">
      <Hero text="שף פיצה לאירועים בכל הגדלים" />
      <div className="description">
        <p>🎉 <strong>מתאימים לאירועים בכל הגדלים</strong><br />
          בין אם מדובר באירוע משפחתי קטן או בחגיגה גדולה, אנו כאן כדי לספק חוויה קולינרית בלתי נשכחת!
        </p>
        <p>🔥 <strong>אפייה במקום</strong><br />
          הפיצות שלנו יוצאות מהטאבון חמות ולוהטות – פשוט אמאל'ה! תהליך האפייה במקום מבטיח רעננות וטריות שאין להן תחליף.
        </p>
        <p>🧀 <strong>100% גבינת מוצרלה אמיתית</strong><br />
          אין כאן משחקים! אנו משתמשים רק בגבינת מוצרלה איכותית, מבלי להתפשר על הטעם. לא תמצאו אצלנו גבינה צהובה, אלא רק את הטוב ביותר.
        </p>
        <p>🌟 <strong>תוספות לבחירתכם</strong><br />
          בחרו מתוך מגוון עשיר של תוספות טריות ואיכותיות, שמיועדות להתאים לכל טעם.
        </p>
        <p>🍅 <strong>חומרי הגלם האיכותיים ביותר</strong><br />
          כל מרכיב שלנו נבחר בקפידה – כל עגבניה עברה תהליך של בחירה עם זכוכית מגדלת, כדי להבטיח שהמוצר הסופי יהיה מושלם!
        </p>
        <p>🌿 <strong>תוספות מיוחדות</strong><br />
          נסו את התוספות הייחודיות שלנו: ריבת בצל מתקתקה, ריבת עגבניות שרי עסיסיות, קונפי ארטישוק מעודן, שום קונפי ועוד. כל אחת מהן מוסיפה נופך מיוחד לפיצה שלכם!
        </p>
      </div>

      {/* Call to Action Button */}
     

      {/* Include the Contact Form */}
      <ContactForm />
       <div className="call-us-container">
        <a href="tel:+972526996037" className="call-button">התקשרו לשמוע עוד פרטים!</a>
      </div>
    </div>
  );
};

export default PizzaToEvents;
