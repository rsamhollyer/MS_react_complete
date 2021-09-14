import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        setisLoading(false);

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
      setisLoading(false);
    };

    fetchMeals().catch(err => {
      setError(err.message);
      setisLoading(false);
    });

    return () => {};
  }, [url, error]);
  return { data, error, isLoading };
}
