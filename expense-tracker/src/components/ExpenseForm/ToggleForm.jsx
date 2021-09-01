import React from 'react';

export default function ToggleForm({ children, showForm, setShowForm }) {
  if (showForm) return <>{children}</>;

  return (
    <button type="button" onClick={() => setShowForm(!showForm)} className="">
      Add Expense
    </button>
  );
}
