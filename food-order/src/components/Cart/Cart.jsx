import React, { useContext } from 'react';
import cartContext from '../../store/cart-context';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart({ onClose }) {
  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
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
