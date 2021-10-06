import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

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

export const getCartData = () => async dispatch => {
  const fetchData = async () => {
    const response = await fetch(
      'https://react-http-af080-default-rtdb.firebaseio.com/cart.json'
    );

    if (!response.ok) {
      throw new Error('Could not fetch cart data');
    }
    const data = await response.json();
    return data;
  };

  try {
    const cartData = await fetchData();
    dispatch(cartActions.replaceCart(cartData));
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Fetching cart data failed!',
      })
    );
  }
};
