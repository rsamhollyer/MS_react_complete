import React from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => (
  <section className="search">
    <Card>
      <div className="search-input">
        <label htmlFor="title">Filter by Title</label>
        <input id="title" type="text" />
      </div>
    </Card>
  </section>
));
Search.displayName = 'Search';

export default Search;
