import { useState } from 'react';

/**
 * @namespace useHTTP
 *
 * @param {object} requestConfig - object containing some fetch() configurable information
 * @param {string} requestConfig.url  Url string
 * @param {string} requestConfig.method  Requested HTTP method
 * @param {string} requestConfig.headers  Request Headers to send
 * @param {string=} requestConfig.body  Request body sent with required methods
 *
 * @param {function} applyData  - setter function that should update the state where data loads
 *
 */

export default function useHTTP(requestConfig, applyData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return { isLoading, error, sendRequest };
}
