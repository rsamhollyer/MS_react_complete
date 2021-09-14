import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const goodData = await response.json();
        const dataArray = Object.keys(goodData).reduce((acc, cur) => {
          const dataCache = {
            id: cur,
            name: goodData[cur].name,
            description: goodData[cur].description,
            price: goodData[cur].price,
          };
          return acc.concat(dataCache);
        }, []);
        setData(dataArray);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMeals();
    return () => {};
  }, [url, error.message]);
  return { data, error };
}
