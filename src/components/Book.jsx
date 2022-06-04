import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <>
      <div>
        {`Book "${title}" , and Author:  "${author}"`}
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
