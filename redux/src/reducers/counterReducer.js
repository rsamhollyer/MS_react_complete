export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE = 'TOGGLE';
const DEFAULT = 'DEFAULT';

const initialState = { counter: 0, showCounter: true };

export const counterReducer = (state = initialState, action) => {
  const actions = {
    INCREMENT: { ...state, counter: state.counter + action.value },
    DECREMENT: { ...state, counter: state.counter - action.value },
    TOGGLE: { ...state, showCounter: !state.showCounter },
    DEFAULT: state,
  };
  return actions[action.type] || actions[DEFAULT];
};
