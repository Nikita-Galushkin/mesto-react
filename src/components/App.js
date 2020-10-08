import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(0);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main 
          onEditAvatar={() => {
            handleEditAvatarClick();
          }}
          onEditProfile={() => {
            handleEditProfileClick();
          }}
          onAddPlace={() => {
            handleAddPlaceClick();
          }}
          onCardClick={(card) => {
            handleCardClick(card);
          }}
          />
          <Footer />
        </div>
        <PopupWithForm 
          name={'edit-profile'} 
          title={'Редактировать профиль'} 
          children={
            <>
              <label>
                <input type="text" className="modal__item modal__item_type_name" name="name" defaultValue="Жак-Ив Кусто" placeholder="ФИО" required minLength="2" maxLength="40" />
                <span id="name-error" className="modal__item-error"></span>
              </label>
              <label>
                <input type="text" className="modal__item modal__item_type_profession" name="about" defaultValue="Исследователь океана" placeholder="Профессия" required minLength="2" maxLength="200" />
                <span id="about-error" className="modal__item-error"></span>
              </label>
            </>
          } 
          text={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm 
          name={'add-card'} 
          title={'Новое место'} 
          children={
            <>
              <label>
                <input type="text" className="modal__item modal__item_type_place" name="name" defaultValue="" placeholder="Название" required minLength="1" maxLength="30" />
                <span id="name-error" className="modal__item-error"></span>
              </label>
              <label>
                <input type="url" className="modal__item modal__item_type_link-place" name="link" defaultValue="" placeholder="Ссылка на картинку" required />
                <span id="link-error" className="modal__item-error"></span>
              </label>
            </>
          } 
          text={'Создать'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm 
          name={'confirm'} 
          title={'Вы уверены?'} 
          text={'Да'} 
        />
        <PopupWithForm 
          name={'update-avatar'} 
          title={'Обновить аватар'} 
          children={
            <>
              <label>
                <input type="url" className="modal__item modal__item_type_avatar" name="avatar" defaultValue="" placeholder="Ссылка на фото" required />
                <span id="avatar-error" className="modal__item-error"></span>
              </label>
            </>
          } 
          text={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
