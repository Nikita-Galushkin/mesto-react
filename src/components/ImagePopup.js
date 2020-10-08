import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`modal modal_type_photo ${card ? 'modal_opened' : ''}`}>
      <div className="modal__container-photo">
        <button className="modal__close-button modal__close-button_type_photo" type="button" onClick={onClose}></button>
        <img src={card.src} alt={card.title} className="modal__photo" />
        <p className="modal__text">{card.title}</p>
      </div>
    </div>
  );
}

export default ImagePopup;