import React from 'react';
import classes from './Cart.module.css';

export default function Cart({ items }) {
  const cartItems = items.map(item => <li>{item.name}</li>);
  return (
    <div>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$99</span>
      </div>
      <div className={classes.action}>
        <button type="button" className={classes['button--alt']}>
          Close
        </button>
        <button type="button" className={classes.button}>
          Order
        </button>
      </div>
    </div>
  );
}
