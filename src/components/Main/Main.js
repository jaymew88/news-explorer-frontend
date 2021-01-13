import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import './Main.css'

function Main (props) {
  return (
    <main className="main">
      <Preloader loading={props.loading} results={props.results }/> 
      {!props.loading && props.results &&
        <NewsCardList cards={props.cards} />
      }    
      <About />
    </main>
  )
}

export default Main;