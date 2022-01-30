import { useCallback, useReducer, useState } from 'react';
import {
  fetchDeleteIngred,
  fetchPostIngreds,
  URLString,
} from '../../api/ingredients';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const ingredientReducer = (ingState, action) => {
  const actionTypes = {
    SET: () => action.newIngreds,
    ADD: () => [...ingState, action.ingred],
    DELETE: () => ingState.filter(ing => ing.id !== action.id),
    undefined: () => {
      throw new Error(`Invalid type ${action.type}`);
    },
  };
  return actionTypes[action.type]();
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const addIngredientHandler = async newIngredient => {
    setIsLoading(true);

    const getFirebaseId = await fetchPostIngreds(
      URLString,
      newIngredient
    ).catch(err => {
      console.error(err);
      setIsLoading(false);
      setError('Something went wrong');
    });
    const id = getFirebaseId.name;
    dispatch({ type: 'ADD', ingred: { id, ...newIngredient } });

    setIsLoading(false);
  };

  const removeIngredientHandler = async igID => {
    setIsLoading(true);

    await fetchDeleteIngred(URLString, igID)
      .then(() => dispatch({ type: 'DELETE', id: igID }))
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setError('Something went wrong');
      });

    setIsLoading(false);
  };

  const filterIngredHandler = useCallback(filteredIngred => {
    // setIngredients(filteredIngred);
    dispatch({ type: 'SET', newIngreds: filteredIngred });
  }, []);

  const closeErrorModalHandler = () => {
    setError('');
  };

  return (
    <div className="App">
      {error && (
        <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
      )}
      <IngredientForm
        isLoading={isLoading}
        onAddIngredient={addIngredientHandler}
      />
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
