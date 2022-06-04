import React from 'react';

function Form() {
  return (
    <div>
      <h2>Add New Book</h2>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Categories" />
      <button type="button">Submit</button>
    </div>
  );
}

export default Form;
