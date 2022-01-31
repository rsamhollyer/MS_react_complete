/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';
import './IngredientList.css';

const IngredientList = memo(({ onRemoveItem, ingredients }) => (
  <section className="ingredient-list">
    <h2>Loaded Ingredients</h2>
    <ul>
      {ingredients.map(ig => (
        <li key={ig.id} onClick={() => onRemoveItem(ig.id)}>
          <span>{ig.title}</span>
          <span>{ig.amount}x</span>
        </li>
      ))}
    </ul>
  </section>
));

IngredientList.displayName = 'Ingredient List';
export default IngredientList;
