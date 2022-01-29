import { useState } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

export const URLString =
  'https://auth-312de-default-rtdb.firebaseio.com/ingredients.json';

export async function fetchPostIngreds(url, bodyString) {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(bodyString),
    headers: { 'Content-Type': 'application/json' },
  });
  const response = await res.json();
  return response;
}

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = async newIngredient => {
    const getFirebaseId = await fetchPostIngreds(URLString, newIngredient);
    const id = getFirebaseId.name;
    setIngredients(prevState => [...prevState, { id, ...newIngredient }]);
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
