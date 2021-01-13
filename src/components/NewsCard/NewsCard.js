import React from 'react';
import './NewsCard.css';

function NewsCard({ date, title, text, source, image }) {
  return (
    <li className="card">
      <img className="card__img" src={image} alt={title} />
      <p className="card__date">{date}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__source">{source}</p>
    </li>
  )
}

export default NewsCard;
