import React from 'react';

const pizzas = [
  { name: 'Margherita', price: '$12' },
  { name: 'Pepperoni', price: '$14' },
  { name: 'Veggie', price: '$13' },
];

function Menu() {
  return (
    <section id="menu">
      <h3>Our Menu</h3>
      <ul>
        {pizzas.map((pizza, index) => (
          <li key={index}>
            {pizza.name} - {pizza.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
