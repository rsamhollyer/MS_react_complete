import { useEffect, useState } from 'react';
import {
  fetchGetIngred,
  fetchPostIngreds,
  URLString,
} from '../../api/ingredients';
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

  const filterIngredHandler = filteredIngred => {
    setIngredients(filteredIngred);
  };

  useEffect(() => {
    async function fetchData() {
      const allIngreds = await fetchGetIngred(URLString);
      setIngredients(allIngreds);
    }
    fetchData();
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
