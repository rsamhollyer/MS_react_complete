import { uiActions } from './ui-slice';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity += 1;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity -= 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const sendCartData = cart => async dispatch => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data',
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      'https://react-http-af080-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong with cart data');
    }
  };

  try {
    await sendRequest();
    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Successfully fethced cart data',
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed!',
      })
    );
  }
};

export const cartActions = cartSlice.actions;
export default cartSlice;
