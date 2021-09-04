import React, { useReducer } from 'react';
import { ADD, REMOVE } from '../components/actions/cart-actions';
import cartReducer, { initialState } from '../reducers/cart-reducer';
import CartContext from './cart-context';

export default function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: ADD, payload: { item } });
  };

  const removeItemToCartHandler = id => {
    dispatchCartAction({ type: REMOVE, payload: { id } });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
