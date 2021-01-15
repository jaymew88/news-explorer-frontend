import React, { useState } from 'react';
import './NewsCard.css';

function NewsCard({ date, title, text, source, image, keyword, isSavedNews }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li className="card">
      <button 
        type="button" 
        className="card__btn" 
        onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)} 
      />
      {isShown && (    
       <p className="card__save">Sign in to save article
         {/* {isSavedNews ? "Remove from saved" : "Sign in to save article"} */}
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
