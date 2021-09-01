import React from 'react';
import './ExpensesFilter.css';

export default function ExpensesFilter({ filteredYear, onChangeFilter }) {
  const onChangeHandler = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year_filter">Filter by year</label>
        <select
          id="year_filter"
          onChange={onChangeHandler}
          value={filteredYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
