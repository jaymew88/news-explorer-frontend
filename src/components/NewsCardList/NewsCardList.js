import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css'

function NewsCardList({ cards }) {
  return (
    <section className="cards">
      <h2 className="cards__title">Search Results</h2>
      <div className="cards__container">
        <ul className="cards__list">
          {cards.map((card, index) => (
            <NewsCard 
              key={index}
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
      </div>
    </section>
  )
}

export default NewsCardList
