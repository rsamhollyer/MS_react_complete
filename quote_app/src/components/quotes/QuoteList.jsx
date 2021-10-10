import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { sortQuotes } from '../../utils/sortQuotes';
import QuoteItem from './QuoteItem';
import styles from './QuoteList.module.css';

const QuoteList = props => {
  const history = useHistory();
  const location = useLocation();

  const qParams = new URLSearchParams(location.search);

  const isAscending = qParams.get('sort') === 'asc';
  const buttonText = isAscending ? 'Descending' : 'Ascending';
  const sortDirection = !isAscending ? 'asc' : 'desc';
  const sortedQuotes = sortQuotes(props.quotes, sortDirection);

  const sortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${sortDirection}`,
    });
  };

  return (
    <>
      <div className={styles.sorting}>
        <button onClick={sortingHandler} type="button">
          Sort {buttonText}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};
export default QuoteList;
