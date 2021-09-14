import { useReducer } from 'react';
import { initialState, inputStateReducer } from '../reducers/input-reducer';

export default function useInputs(validateValue) {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const isValueValid = validateValue(inputState.value);

  const hasError = !isValueValid && inputState.isTouched;

  const inputHandler = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const resetInput = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    inputHandler,
    blurHandler,
    hasError,
    isValid: isValueValid,
    reset: resetInput,
  };
}
