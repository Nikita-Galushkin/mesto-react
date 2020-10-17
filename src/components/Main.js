import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialsCards()
      .then((data) => {
        const card = data.map((el) => ({
          title: el.name,
          src: el.link,
          likes: el.likes,
          id: el._id,
          owner: el.owner
        })) 
        setCards(card)
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {

        
        console.log(newCard);
        console.log(cards);
        
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  } 

  return (
    <main className="content page__content">
      <section className="profile section content__section">
        <div className="profile__info">
          <button className="profile__image-button" type="button" onClick={onEditAvatar}>
            <div className="profile__icon"></div>
            <img src={currentUser.avatar} alt="фото" className="profile__image" />
          </button>
          <div className="profile__edit">
            <div className="profile__text">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements section content__section">
        <ul className="elements__list">
          {cards.map((card) =>
            <Card 
              key={card.id} 
              card={card} 
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
            />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;