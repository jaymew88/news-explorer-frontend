import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <section className="cards">
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
    </section>
  )
}

export default NewsCardList;

