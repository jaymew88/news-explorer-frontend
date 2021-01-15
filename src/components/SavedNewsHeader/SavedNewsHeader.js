import React from 'react';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';


function SavedNewsHeader({ loggedIn }) {
  return (
    <header className="saved-news-header">
      <Navigation loggedIn={loggedIn} isSavedNews={true} />
      <p className="saved-news-header__subtitle">Saved articles</p>
      <h1 className="saved-news-header__title">Jayme, you have 5 saved articles.</h1>
      <p className="saved-news-header__text">By keywords: <span className="saved-news-header__span">Nature, Yellowstone and 2 others</span></p>
    </header>
  )
}

export default SavedNewsHeader;
