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

export const httpInitialState = {
  isLoading: false,
  error: false,
  data: null,
  extra: null,
  identifier: null,
};

export const httpReducer = (httpState, action) => {
  const actionTypes = {
    SEND: () => ({
      isLoading: true,
      error: false,
      data: null,
      extra: null,
      identifier: action.identifier,
    }),
    RESPONSE: () => ({
      ...httpState,
      isLoading: false,
      data: action.data,
      extra: action.extra,
    }),
    ERROR: () => ({
      isLoading: false,
      error: 'Something went wrong',
      data: null,
    }),
    CLEAR: () => httpInitialState,
    undefined: () => {
      throw new Error(`Invalid type ${action.type}`);
    },
  };
  return actionTypes[action.type]();
};
