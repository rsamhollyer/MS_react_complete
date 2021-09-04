import React from 'react';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';

export default function Cart({ items = [{ name: 'food' }] }) {
  const cartItems = items.map(item => <li>{item.name}</li>);
  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$99</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']}>
          Close
        </button>
        <button type="button" className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
}
