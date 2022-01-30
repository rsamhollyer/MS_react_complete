import React, { useEffect, useState } from 'react';
import { fetchGetIngred, URLString } from '../../api/ingredients';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(({ onLoadIngredients }) => {
  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    async function fetchData() {
      const query =
        searchState.length === 0
          ? ''
          : `?orderBy="title"&equalTo="${searchState}"`;
      const searchedIngredients = await fetchGetIngred(URLString + query);
      // onLoadIngredients(searchedIngredients);
    }
    fetchData();
  }, [searchState, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label htmlFor="title">Filter by Title</label>
          <input
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
