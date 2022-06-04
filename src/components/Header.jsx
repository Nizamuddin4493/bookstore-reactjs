import React from 'react';
import { Link } from 'react-router-dom';
import userImg from './images/user-icon.png';

function Header() {
  return (
    <>
      <div className="header-div">
        <h1>Bookstore CMS</h1>
        <div className="links">
          <div><Link to="/BookList">BOOKS</Link></div>
          <div><Link to="/Categories">CATEGORIES</Link></div>
        </div>
        <img src={userImg} className="user-icon" alt="User Icon" />
      </div>
    </>
  );
}

export default Header;
