import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Main.css'


function Main ({ handlePopup, user, isOpen }) {
  return (
    <main className="main">
        <Navigation handlePopup={handlePopup} user={user} isOpen={isOpen} />
        <Header />
        <SearchForm />
    </main>
  )
}

export default Main;