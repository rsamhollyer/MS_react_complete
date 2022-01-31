import { useCallback, useReducer } from 'react';
import {
  fetchDeleteIngred,
  fetchPostIngreds,
  URLString,
} from '../../api/ingredients';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

import {
  ingredientReducer,
  httpReducer,
  httpInitialState,
} from '../../reducers';

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [{ isLoading, error }, dispatchHttp] = useReducer(
    httpReducer,
    httpInitialState
  );

  const addIngredientHandler = async newIngredient => {
    dispatchHttp({ type: 'SEND' });

    const getFirebaseId = await fetchPostIngreds(
      URLString,
      newIngredient
    ).catch(err => {
      console.error(err);
      dispatchHttp({ type: 'ERROR' });
    });
    const id = getFirebaseId.name;
    dispatch({ type: 'ADD', ingred: { id, ...newIngredient } });

    dispatchHttp({ type: 'RESPONSE' });
  };

  const removeIngredientHandler = async igID => {
    dispatchHttp({ type: 'SEND' });

    await fetchDeleteIngred(URLString, igID)
      .then(() => dispatch({ type: 'DELETE', id: igID }))
      .catch(err => {
        console.error(err);
        dispatchHttp({ type: 'ERROR' });
      });

    dispatchHttp({ type: 'RESPONSE' });
  };

  const filterIngredHandler = useCallback(filteredIngred => {
    dispatch({ type: 'SET', newIngreds: filteredIngred });
  }, []);

  const closeErrorModalHandler = () => {
    dispatchHttp({ type: 'CLEAR' });
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
