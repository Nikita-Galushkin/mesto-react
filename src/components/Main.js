import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([ api.getUserInfo(), api.getInitialsCards() ])
      .then(([ info, data ]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);

        const card = data.map((el) => ({
          title: el.name,
          src: el.link,
          likes: el.likes,
          id: el._id
        })) 
        setCards(card)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content page__content">
      <section className="profile section content__section">
        <div className="profile__info">
          <button className="profile__image-button" type="button" onClick={onEditAvatar}>
            <div className="profile__icon"></div>
            <img src={userAvatar} alt="фото" className="profile__image" />
          </button>
          <div className="profile__edit">
            <div className="profile__text">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements section content__section">
        <ul className="elements__list">
          {cards.map(({id, ...item}) => 
            <Card 
              key={id} 
              {...item} 
              onCardClick={onCardClick} 
            />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;