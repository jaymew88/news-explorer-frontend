import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

import './SavedNews.css';

function SavedNews({ cards }) {
  return (
    <>
     <main className="saved-news">
        <NewsCardList cards={cards} isSavedNews={true} />
    </main>
    </>
  )
}

export default SavedNews;
