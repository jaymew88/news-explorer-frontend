import React, { useState } from 'react';
import './NewsCard.css';

function NewsCard({ date, title, text, source, image, keyword, loggedIn, isSavedNews, marked}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li className="card">
      <button 
        type="button" 
        className={`card__btn ${isSavedNews ? 'card__btn_delete' : ''} `}
        onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)} 
      />
      {(isShown && !loggedIn && !marked) && (    
       <p className="card__save">
          {isSavedNews ? "Remove from saved" : "Sign in to save article"}
       </p>
      )}
      <p className="card__keyword">{keyword}</p>
      <img className="card__img" src={image} alt={title} />
      <p className="card__date">{date}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__source">{source}</p>
    </li>
  )
}

export default NewsCard;
