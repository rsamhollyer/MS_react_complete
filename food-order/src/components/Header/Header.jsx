import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button type="button">Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals background" />
      </div>
    </>
  );
}
