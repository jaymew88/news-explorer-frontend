import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';


function Header ({ loggedIn, onSigninClick }) {

  return (
    <header className="header">
      <Navigation loggedIn={loggedIn} onSigninClick={onSigninClick} />
      <p className="header__title">What's going on in the world?</p>
      <h1 className="header__subtitle">Find the latest news on any topic and save them in your personal account.</h1>
      <SearchForm />
    </header>
  );
}

export default Header;
