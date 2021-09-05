import React, { useContext } from 'react';
import cartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem({ mealName, description, price, id }) {
  const cartCtx = useContext(cartContext);
  const fixedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id,
      name: mealName,
      amount,
      price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealName}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
