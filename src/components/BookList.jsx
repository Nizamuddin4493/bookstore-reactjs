import React from 'react';
import Book from './Book';
import Form from './Form';
import Header from './Header';

function BookList() {
  return (
    <>
      <Header />
      <Book title="Nizam" author="Khan" />
      <Book title="Ahmad" author="Kaka" />
      <Book title="Ali" author="mayous" />
      <hr />
      <Form />
    </>
  );
}

export default BookList;
