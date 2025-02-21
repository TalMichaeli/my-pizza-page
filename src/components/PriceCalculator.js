import React, { useState } from 'react';
import './PriceCalculator.css';

function PriceCalculator() {
  const [guests, setGuests] = useState(0);

  // Default price calculation based on number of guests
  let price = 0;

  // Calculate price based on guest ranges
  if (guests > 0) {
    if (guests <= 10) {
      price = guests * 200;  // For 1-10 guests
    } else if (guests <= 20) {
      price = (10 * 200) + ((guests - 10) * 190);  // For 11-20 guests
    } else if (guests <= 30) {
      price = (10 * 200) + (10 * 190) + ((guests - 20) * 185);  // For 21-30 guests
    } else {
      price = (10 * 200) + (10 * 190) + (10 * 185) + ((guests - 30) * 180);  // For 31+ guests
    }
  }

  // Display the calculated price
  return (
    <div className="price-calculator">
      <h2>חישוב מוערך לפי מספר אנשים</h2>

      {/* Guest Count Input */}
      <label>
        :מספר אנשים
        <input
          type="tel"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
        />
      </label>

      {/* Display Total Price */}
      <h3>מחיר משוערך: {price}</h3>
      <p>* המחירים המוצגים כאן עלולים להתשנות בהתאם לשינויים בתפריט</p>
    </div>
  );
}

export default PriceCalculator;
