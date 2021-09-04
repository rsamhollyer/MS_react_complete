import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem({ mealName, description, price, id }) {
  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealName}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}
