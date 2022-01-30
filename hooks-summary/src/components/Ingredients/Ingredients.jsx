import { useCallback, useState } from 'react';
import {
  fetchDeleteIngred,
  fetchPostIngreds,
  URLString,
} from '../../api/ingredients';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
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
    setIngredients(prevState => [...prevState, { id, ...newIngredient }]);

    setIsLoading(false);
  };

  const removeIngredientHandler = async igID => {
    setIsLoading(true);

    await fetchDeleteIngred(URLString, igID)
      .then(() =>
        setIngredients(prevState =>
          prevState.filter(ingred => ingred.id !== igID)
        )
      )
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setError('Something went wrong');
      });

    setIsLoading(false);
  };

  const filterIngredHandler = useCallback(filteredIngred => {
    setIngredients(filteredIngred);
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
