import React from 'react';

const BasicForm = () => (
  <form>
    <div className="control-group">
      <div className="form-control">
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="name">Last Name</label>
        <input type="text" id="name" />
      </div>
    </div>
    <div className="form-control">
      <label htmlFor="name">E-Mail Address</label>
      <input type="text" id="name" />
    </div>
    <div className="form-actions">
      <button type="submit">Submit</button>
    </div>
  </form>
);

export default BasicForm;
