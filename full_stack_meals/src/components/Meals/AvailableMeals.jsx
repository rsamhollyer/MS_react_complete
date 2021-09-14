/* eslint-disable no-nested-ternary */
import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useFetch from '../../hooks/useFetch';

const AvailableMeals = () => {
  const { data, error, isLoading } = useFetch(
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
    <section
      className={`${classes.meals} ${isLoading && classes.meals_loading} ${
        error && classes.meals_error
      }`}
    >
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};
export default AvailableMeals;
