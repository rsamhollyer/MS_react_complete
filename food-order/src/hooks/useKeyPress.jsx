import { useEffect } from 'react';
/**
 * useKeyPress
 * @param {Object} keyObject - Keystroke is the key press you want to run the function you pass as the value.
 * For example {"Escape" : someHandler}
 *
 * @param {Function} keyObject.keystroke
 *
 */
export default function useKeyPress(keyObject) {
  const keyArray = Object.entries(keyObject);
  useEffect(() => {
    const keyPress = e => {
      const keyListenersMap = new Map(keyArray);
      const listener = keyListenersMap.get(e.key);

      return listener && listener(e);
      /*
      If the Map returns a value from e.key then we want to call the listener passing it the event.
      This is equiivalent to writing :
      if(listener) return listener(e);
      */
    };

    document.addEventListener('keyup', keyPress);
    return () => document.removeEventListener('keyup', keyPress);
  }, [keyArray]);
}
