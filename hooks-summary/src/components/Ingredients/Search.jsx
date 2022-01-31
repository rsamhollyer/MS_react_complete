import React, { useEffect, useRef, useState } from 'react';
import { useHttp, URLString } from '../../hooks/useHttp';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './Search.css';

const Search = React.memo(({ onLoadIngredients }) => {
  const [searchState, setSearchState] = useState('');
  const searchRef = useRef();
  const { isLoading, error, data, sendRequest, clear } = useHttp();

  useEffect(() => {
    const query =
      searchState.length === 0
        ? ''
        : `?orderBy="title"&equalTo="${searchState}"`;

    const debouce = setTimeout(() => {
      if (searchState === searchRef.current.value) {
        sendRequest(`${URLString}.json${query}`);
      }
    }, 600);

    return () => {
      clearTimeout(debouce);
    };
  }, [sendRequest, searchState, searchRef]);

  useEffect(() => {
    if (data && !isLoading && !error) {
      const loadedIngredients = [];
      for (const [key, value] of Object.entries(data)) {
        loadedIngredients.push({
          id: key,
          title: value.title,
          amount: value.amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label htmlFor="title">Filter by Title</label>
          {isLoading && <span>LOADING...</span>}
          <input
            ref={searchRef}
            id="title"
            type="text"
            value={searchState}
            onChange={e => setSearchState(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});
Search.displayName = 'Search';

export default Search;
