import React from 'react';
import DUMMY_MEALS from '../../utils/dummy-meals';
import classes from './styles/AvailableMeals.module.css';

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal => <li key={meal.id}>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}
