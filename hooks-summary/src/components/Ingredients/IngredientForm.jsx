import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(() => {
  const [inputState, setInputState] = useState({ title: '', amount: '' });

  const submitHandler = e => {
    e.preventDefault();
    /* ... */
  };

  const inputSettingFunction = (e, stateString) => {
    const { value } = e.target;
    setInputState(prevState => ({ ...prevState, [stateString]: value }));
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
              value={inputState.title}
              onChange={e => inputSettingFunction(e, 'title')}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={e => inputSettingFunction(e, 'amount')}
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
