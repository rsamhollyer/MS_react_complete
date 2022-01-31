import { useCallback, useEffect, useReducer } from 'react';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import { ingredientReducer } from '../../reducers';
import { URLString, useHttp } from '../../hooks/useHttp';

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, extra, identifier, sendRequest, clear } =
    useHttp();

  useEffect(() => {
    console.log({ data, extra });
    if (!isLoading && !error && identifier === 'DELETE_REQ') {
      dispatch({ type: 'DELETE', id: data.extra });
    } else if (!isLoading && data && !error && identifier === 'POST_REQ') {
      dispatch({ type: 'ADD', ingred: { id: data.name, ...extra } });
    }
  }, [data, extra, error, identifier, isLoading]);

  const addIngredientHandler = useCallback(
    newIngredient => {
      sendRequest(
        `${URLString}.json`,
        'POST',
        JSON.stringify(newIngredient),
        newIngredient,
        'POST_REQ'
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    igID => {
      sendRequest(
        `${URLString}/${igID}.json`,
        'DELETE',
        null,
        igID,
        'DELETE_REQ'
      );
    },
    [sendRequest]
  );

  const filterIngredHandler = useCallback(filteredIngred => {
    dispatch({ type: 'SET', newIngreds: filteredIngred });
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
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
