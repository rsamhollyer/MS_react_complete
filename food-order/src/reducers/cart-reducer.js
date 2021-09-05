import { ADD, REMOVE } from '../components/actions/cart-actions';

export const initialState = {
  items: [],
  totalAmount: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const { item } = action;
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      const existingCartItemIndex = state.items.findIndex(
        oneItem => oneItem.id === item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case REMOVE: {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      return initialState;
  }
}
