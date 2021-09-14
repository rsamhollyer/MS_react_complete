export const initialState = { value: '', isTouched: false };
export const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.value };

    case 'BLUR':
      return { ...state, isTouched: true };

    case 'RESET':
      return initialState;

    default:
      return inputStateReducer;
  }
};
