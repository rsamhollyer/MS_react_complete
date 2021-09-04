import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';
import App from './App';
import CartProvider from './store/CartProvider';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
