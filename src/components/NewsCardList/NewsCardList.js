import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <section className="cards">
      <h2 className="cards__title">Search Results</h2>
        <ul className="cards__list">
          {props.cards.map((card, index) => (
            <NewsCard 
              key={index}
              keyword={card.keyword}
              date={card.date}
              title={card.title}
              text={card.text}
              source={card.source}
              image={card.image}
            />
            )
          )}
        </ul>
      <button className="cards__more-btn">Show More</button>
    </section>
  )
}

export default NewsCardList;

