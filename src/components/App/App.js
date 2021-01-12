import React, { useState } from 'react';
import {
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
// import SavedNews from '../SavedNews/SavedNews';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  const [cards, setCards] = useState([{
    keyword: 'Nature',
    title: 'Everyone Needs a Special \'Sit Spot\' in Nature',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'November 4, 2020',
    source: 'Treehugger',
    link: 'https://www.treehugger.com/special-sit-spot-nature-5085811',
    image: 'https://www.treehugger.com/thmb/lQeC9zGlT3YysU-JDcilAZkUw64=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MJssitspot-1865545fea1944d3a375b54d7bae0a4c.jpeg',
  },
  {
    keyword: 'Nature',
    title: 'Nature makes you better',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.',
    date: 'February 19, 2019',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/travel/features/partner-content-nature-makes-you-better/',
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    keyword: 'Yellowstone',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    text: 'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to.',
    date: 'October 19, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/travel/destinations/north-america/united-states/national-parks/sightseer-american-tourists-in-national-parks/',
    image: 'https://images.unsplash.com/photo-1578583705404-572695c5e32b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8eWVsbG93c3RvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    keyword: 'Parks',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be.',
    date: 'November 4, 2020',
    source: 'National Parks Traveler',
    link: 'https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail',
    image: 'https://images.unsplash.com/photo-1603832857100-39ec58c0fe55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYW5kJTIwdGV0b258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    keyword: 'Photography',
    title: 'Scientists Don\'t Know Why Polaris Is So Weird ',
    text: 'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.',
    date: 'March 16, 2020',
    source: 'Treehugger',
    link: 'https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425',
    image: 'https://images.unsplash.com/photo-1487621867583-13f330e366ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cG9sYXJpc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  ]);


  return (
    <>
      <div className='page'>
        <Switch>
          <Route path='/'>
            <Main />
            <NewsCardList cards={cards} />
            {/* <Preloader loading={false}/> */}
            <About />
            <Footer />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default (App);