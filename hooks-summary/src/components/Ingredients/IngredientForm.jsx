import React, { useRef } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(({ onAddIngredient, isLoading }) => {
  const titleState = useRef('');
  const amountState = useRef('');
  console.log(amountState);
  const submitHandler = e => {
    e.preventDefault();

    let { value: titleValue } = titleState.current;
    let { value: amountValue } = amountState.current;

    onAddIngredient({
      title: titleValue,
      amount: amountValue,
    });
    if (titleValue && amountValue) {
      titleState.current.value = '';
      amountState.current.value = '';
    }
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" ref={titleState} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" ref={amountState} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {isLoading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
IngredientForm.displayName = 'IngredientForm';
