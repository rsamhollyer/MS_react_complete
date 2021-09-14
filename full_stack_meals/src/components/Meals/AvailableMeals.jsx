import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useFetch from '../../hooks/useFetch';

const AvailableMeals = () => {
  const { data, error } = useFetch(
    'https://react-http-af080-default-rtdb.firebaseio.com/meals.json'
  );
  const mealsList = data?.map(meal => (
    <MealItem
      key={meal?.id}
      id={meal?.id}
      name={meal?.name}
      description={meal?.description}
      price={meal?.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      {error && <p>{error}</p>}
    </section>
  );
};
export default AvailableMeals;
