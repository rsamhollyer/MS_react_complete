import React from 'react';
import DUMMY_MEALS from '../../utils/dummy-meals';
import Card from '../Card/Card';
import MealItem from './MealItem/MealItem';
import classes from './styles/AvailableMeals.module.css';

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      mealName={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
