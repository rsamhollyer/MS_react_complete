export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DEFAULT = 'DEFAULT';

const initialState = { counter: 0 };

export const counterReducer = (state = initialState, action) => {
  const actions = {
    INCREMENT: { counter: state.counter + 1 },
    DECREMENT: { counter: state.counter - 1 },
    DEFAULT: state,
  };
  return actions[action.type] || actions[DEFAULT];
};
