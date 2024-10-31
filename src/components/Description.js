import React from 'react';
import './Description.css'; // Ensure this CSS file has styling
import { Link } from 'react-router-dom'; // Use Link directly from react-router-dom

function Description() {
  return (
    <div className="description-container">
      <div className="description-text">
        <h3>שף פיצה - חוויה ברמה אחרת</h3>
        <p>
        מתכננים לחגוג את האירוע הבא שלכם? שף פיצה לאירועים הוא הטרנד החדש שכולם מדברים עליו!<br /><br />
        אין כמו פחמימות! מאז ומעולם הפחמימות היו אויבים שלנו, אבל לעולם גם החברים הכי טובים שלנו – בואו נודה בכך, הם פשוט טעימים!<br /><br />
        מה מתכננים לחגוג השנה? יום הולדת? מסיבת רווקות? מפגש עם חברים? אירוע שיש בו פיציולו הוא ללא ספק אירוע שכולו שמחה – אנחנו מתחייבים!<br /><br />
        אנחנו מתאימים לכל סוגי האירועים: חתונות, בר/בת מצווה, ימי הולדת, אירועי חברה ומסיבות.
      </p>
      </div>
      <div className="link-container">
        <figure>
          <Link to="/PrivateChef">
            <img src={require('../photos/private chef.png')} alt="אירוע 1" className="circular-image" />
          </Link>
          <figcaption>שף פרטי עד אליכם</figcaption>
        </figure>
        <figure>
          <Link to="/PizzaInTheOven">
            <img src={require('../photos/oven.png')} alt="אירוע 2" className="circular-image" />
          </Link>
          <figcaption>פיצות בטאבון לאירועים</figcaption>
        </figure>
        <figure>
          <Link to="/Catering">
            <img src={require('../photos/delivery.png')} alt="אירוע 3" className="circular-image" />
          </Link>
          <figcaption>קייטרינג פיצה</figcaption>
        </figure>
        <figure>
          <Link to="/PizzaToEvents">
            <img src={require('../photos/food truck.png')} alt="אירוע 4" className="circular-image" />
          </Link>
          <figcaption>דוכן פיצה לאירועים</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Description;