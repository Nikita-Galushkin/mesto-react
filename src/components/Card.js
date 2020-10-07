import React from 'react';

function Card({ title, likes, src, onCardClick }) {
  
  function handleClick() {
    onCardClick({ title, src });
  }

  return (
    <li className="element">
      <button className="element__photo" type="button" onClick={handleClick}>
        <img src={src} alt="фото" className="element__image" />
      </button>
      <div className="element__info-container">
        <h2 className="element__title">{title}</h2>
        <div className="element__like-container">
          <button className="element__group" type="button"></button>
          <p className="element__counter">{likes.length}</p>
        </div>
      </div>
      <button className="element__trash " type="button"></button>
    </li>
  )
}

export default Card;