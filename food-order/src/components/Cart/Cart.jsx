import React, { useContext } from 'react';
import cartContext from '../../store/cart-context';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart({ onClose }) {
  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = id => {};
  const cartItemAddHandler = item => {};
  const cartItems = cartCtx.items.map(item => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartItemRemoveHandler}
      onAdd={cartItemAddHandler}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          title="close modal"
          onClick={onClose}
          type="button"
          className={classes['button--alt']}
        >
          Close
        </button>
        {hasItems && (
          <button type="button" className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
