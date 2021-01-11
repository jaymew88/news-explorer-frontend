import React, { useState } from 'react';
import {
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
// import Footer from '../Footer/Footer';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
// import SavedNews from '../SavedNews/SavedNews';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {

  return (
    <>
      <div className='page'>
        <Switch>
          <Route path='/'>
            <Main />
            <Preloader loading={false}/>
            <About />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default (App);