import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import Categories from './Categories';

function MainDiv() {
  return (
    <>
      <div className="main-div">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/BookList" element={<BookList book="Salam Nizam" />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainDiv;
