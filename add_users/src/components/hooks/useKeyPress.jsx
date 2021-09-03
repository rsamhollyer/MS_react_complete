import { useEffect } from 'react';
/**
 * useKeyPress
 * @param {Array.<String>} keyArray - the name(s) of the key(s) to respond to, compared against event.key
 * @param {Function} callback - the action to perform on key press
 */
export default function useKeyPress(keyArray, callback) {
  useEffect(() => {
    const onKeyup = e => {
      if (keyArray.includes(e.key)) callback();
    };

    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [keyArray, callback]);
}
