import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import './Main.css'

function Main ({ loading, results, cards, loggedIn }) {
  return (
    <main className="main">
      <Preloader loading={loading} results={results}/> 
      {!loading && results && 
        <>
          <h2 className="main__title">Search Results</h2>
          <NewsCardList cards={cards} loggedIn={loggedIn} isSavedNews={false} />
          <button className="main__more-btn">Show More</button>
        </>
       }    
    </main>
  )
}

export default Main;