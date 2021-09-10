import { useEffect, useState } from 'react';
/**
 * useCounter
 *
 * @return {number} Returns an integer that always increments by 1
 *
 *
 */
export default function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
}
