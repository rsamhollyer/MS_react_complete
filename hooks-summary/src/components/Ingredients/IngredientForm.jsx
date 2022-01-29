import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(() => {
  const [titleState, setTitleState] = useState('');
  const [amountState, setAmountState] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    /* ... */
  };

  const inputSettingFunction = (e, setState) => {
    const { value } = e.target;
    setState(value);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={titleState}
              onChange={e => inputSettingFunction(e, setTitleState)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amountState}
              onChange={e => inputSettingFunction(e, setAmountState)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
IngredientForm.displayName = 'IngredientForm';
