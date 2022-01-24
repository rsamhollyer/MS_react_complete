import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(() => {
  const [inputState, setInputState] = useState({ title: '', amount: '' });
  const submitHandler = e => {
    e.preventDefault();
    // ...
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
              onChange={e =>
                setInputState(prev => ({
                  title: e.target.value,
                  amount: prev.amount,
                }))
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={e =>
                setInputState(prev => ({
                  amount: e.target.value,
                  title: prev.title,
                }))
              }
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
