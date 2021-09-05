import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

export default function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);
  const [isAnimated, setIsAnimated] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce(
    (totalItems, currentItem) => totalItems + currentItem.amount,
    0
  );

  const btnClasses = `${classes.button} ${isAnimated ? classes.bump : ''}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setIsAnimated(true);

    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} type="button" onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
