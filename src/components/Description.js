import React from 'react';
import './Description.css'; // Ensure this CSS file has styling
import { Link } from 'react-router-dom'; // Use Link directly from react-router-dom

function Description() {
  return (
    <div className="description-container">
      <div className="description-text">
        <h3>LaPizza </h3>
        <h3> פיצה שף לאירועים: חגיגה איטלקית עד אליכם</h3>
        <p>
         פיצה - האהבה הגדולה של כולנו. אין כמו הריח הממכר של פיצה אפויה בטאבון, הבצק הקריספי והגבינה הנמתחת. אנחנו מביאים את הטעמים האיטלקיים אצלנו הפיצה היא הרבה יותר מאוכל היא חוויה  <br /><br />
         אירוע מושלם מתחיל בפיצה מושלמת. בין אם אתם חוגגים חתונה, בר מצווה, יום הולדת או מפגש עם חברים, אנחנו מציעים חוויה קולינרית ייחודית שמתאימה לכל סוג אירוע<br /><br />
         אנחנו מבטיחים לכם חוויה קולינרית שתלווה אתכם עוד הרבה אחרי שתסיימו לאכול<br /><br />
         אז למה אתם מחכים? צרו איתנו קשר עוד היום והזמינו אותנו לאירוע שלכם. אנחנו מבטיחים לכם חוויה קולינרית בלתי נשכחת שכולם ידברו עליה<br /><br />
        
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