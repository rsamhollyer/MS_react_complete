import { useCallback, useReducer } from 'react';
import { httpInitialState, httpReducer } from '../../reducers';

export const URLString =
  'https://auth-312de-default-rtdb.firebaseio.com/ingredients';

export const useHttp = () => {
  const [{ isLoading, error, data: httpData }, dispatchHttp] = useReducer(
    httpReducer,
    httpInitialState
  );
  const sendRequest = useCallback((url, method = 'GET', body = '') => {
    dispatchHttp({ type: 'SEND' });

    const params = {
      method,
      body,
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, params)
      .then(response => response.json())
      .then(data => dispatchHttp({ type: 'RESPONSE', data }))
      .catch(err => {
        console.error(err);
        dispatchHttp({ type: 'ERROR' });
      });
  }, []);

  return { isLoading, error, httpData, sendRequest };
};
