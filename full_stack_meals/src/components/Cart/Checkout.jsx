import React from 'react';
import classes from './Checkout.module.css';

export default function Checkout({ onCancel }) {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" />
      </div>

      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" />
      </div>

      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
      </div>

      <div className={classes.control}>
        <label htmlFor="zip">Zip Code</label>
        <input id="zip" type="text" />
      </div>

      <button type="submit">Confirm</button>
      <button onClick={onCancel} type="button">
        Cancel
      </button>
    </form>
  );
}
