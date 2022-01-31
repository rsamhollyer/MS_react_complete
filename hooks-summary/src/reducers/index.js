export const ingredientReducer = (ingredientState, action) => {
  const actionTypes = {
    SET: () => action.newIngreds,
    ADD: () => [...ingredientState, action.ingred],
    DELETE: () => ingredientState.filter(ing => ing.id !== action.id),
    undefined: () => {
      throw new Error(`Invalid type ${action.type}`);
    },
  };
  return actionTypes[action.type]();
};

export const httpReducer = (httpState, action) => {
  const actionTypes = {
    SEND: () => ({ isLoading: true, error: false, data: null }),
    RESPONSE: () => ({ ...httpState, isLoading: false, data: action.data }),
    ERROR: () => ({
      isLoading: false,
      error: 'Something went wrong',
      data: null,
    }),
    CLEAR: () => ({ ...httpState, error: false }),
    undefined: () => {
      throw new Error(`Invalid type ${action.type}`);
    },
  };
  return actionTypes[action.type]();
};

export const httpInitialState = {
  isLoading: false,
  error: false,
  data: null,
};
