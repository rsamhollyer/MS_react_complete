import { ADD, REMOVE } from '../components/actions/cart-actions';

export const initialState = {
  items: [],
  totalAmount: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const updatedItems = state.items.concat(action.payload.item);
      const updatedTotalAmount = state.totalAmount + action.payload.item.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case REMOVE:
      return;

    default:
      return state;
  }
}
