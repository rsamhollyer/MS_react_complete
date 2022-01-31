import { useCallback, useReducer } from 'react';
import { httpInitialState, httpReducer } from '../../reducers';

export const URLString =
  'https://auth-312de-default-rtdb.firebaseio.com/ingredients';

export const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, httpInitialState);

  const clear = useCallback(() => {
    dispatchHttp({ type: 'CLEAR' });
  }, []);

  const sendRequest = useCallback(
    (
      url,
      method = 'GET',
      body = null,
      reqExtra = null,
      reqIdentifier = null
    ) => {
      dispatchHttp({ type: 'SEND' });

      const params = {
        method,
        body,
        headers: { 'Content-Type': 'application/json' },
      };

      fetch(url, params)
        .then(response => response.json())
        .then(resData =>
          dispatchHttp({
            type: 'RESPONSE',
            data: resData,
            extra: reqExtra,
          })
        )
        .catch(err => {
          console.error(err);
          dispatchHttp({ type: 'ERROR' });
        });
    },
    []
  );

  return {
    isLoading: httpState.isLoading,
    error: httpState.error,
    data: httpState.data,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    sendRequest,
    clear,
  };
};
