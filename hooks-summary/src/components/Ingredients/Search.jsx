import React, { useEffect, useRef, useState } from 'react';
import { fetchGetIngred, URLString } from '../../api/ingredients';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(({ onLoadIngredients }) => {
  const [searchState, setSearchState] = useState('');
  const searchRef = useRef();

  useEffect(() => {
    const query =
      searchState.length === 0
        ? ''
        : `?orderBy="title"&equalTo="${searchState}"`;

    async function fetchData(queryString) {
      const searchedIngredients = await fetchGetIngred(URLString + queryString);
      onLoadIngredients(searchedIngredients);
    }

    const debouce = setTimeout(() => {
      if (searchState === searchRef.current.value) {
        fetchData(query);
      }
    }, 600);

    return () => {
      clearInterval(debouce);
    };
  }, [searchState, onLoadIngredients, searchRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label htmlFor="title">Filter by Title</label>
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
