import { useCallback, useReducer } from 'react';

function httpReducer(state, action) {
  const actionCache = {
    SEND: {
      data: null,
      error: null,
      status: 'pending',
    },
    SUCCESS: {
      data: action.responseData,
      error: null,
      status: 'completed',
    },
    ERROR: {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    },
  };
  return actionCache[action.type] || state;

  // if (action.type === 'SEND') {
  //   return {
  //     data: null,
  //     error: null,
  //     status: 'pending',
  //   };
  // }

  // if (action.type === 'SUCCESS') {
  //   return {
  //     data: action.responseData,
  //     error: null,
  //     status: 'completed',
  //   };
  // }

  // if (action.type === 'ERROR') {
  //   return {
  //     data: null,
  //     error: action.errorMessage,
  //     status: 'completed',
  //   };
  // }

  // return state;
}

function useHttp(requestFunction, startWithPending = false) {
  const initialState = {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  };

  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
