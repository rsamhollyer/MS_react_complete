import { useCallback, useState } from 'react';
import { fetchPostIngreds, URLString } from '../../api/ingredients';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

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

  const filterIngredHandler = useCallback(filteredIngred => {
    setIngredients(filteredIngred);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filterIngredHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
