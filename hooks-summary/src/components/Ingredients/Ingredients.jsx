import { useState } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = newIngredient => {
    const newId = new Date().getTime();
    setIngredients(prevState => [
      ...prevState,
      { id: newId, ...newIngredient },
    ]);
  };

  const removeIngredientHandler = igID => {
    setIngredients(prevState => prevState.filter(ingred => ingred.id !== igID));
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
