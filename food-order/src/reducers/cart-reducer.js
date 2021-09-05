import { ADD, REMOVE } from '../components/actions/cart-actions';

export const initialState = {
  items: [],
  totalAmount: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const { item } = action.payload;
      const existingCartItemIndex = state.items.findIndex(
        oneItem => oneItem.id === item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(item);
      }

      const updatedTotalAmount = state.totalAmount + item.price;
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
