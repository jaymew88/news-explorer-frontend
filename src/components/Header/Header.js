import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header (props) {
  return (
    <header className="header">
      <p className="header__title">News Explorer</p>
      <Navigation />
    </header>
  );
}

export default Header;