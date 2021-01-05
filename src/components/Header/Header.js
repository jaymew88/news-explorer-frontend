import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header (props) {
  return (
    <header className="header">
       <Navigation />
      <p className="header__title">What's going on in the world?</p>
      <h1 className="header__subtitle">Find the latest news on any topic and save them in your personal account.</h1>
      <SearchForm />
    </header>
  );
}

export default Header;