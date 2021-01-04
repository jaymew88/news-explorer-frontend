//import React, { useState } from 'react';
import {
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';

import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {



  return (
    <>
      <div className='page'>
        <Switch>
          <Route path='/'>
            <Header />
            {/* <Main />
            <About />
            <Footer /> */}
          </Route>
          {/* <Route path="/saved-news">
            <SavedNewsHeader />
            <SavedNews />
            <About />
            <Footer />
          </Route> */}
        </Switch>
      </div>
    </>
  );
}

export default (App);