import React from 'react';

function PopupWithForm({ name, title, children, text, isOpen, onClose, onSubmit }) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__container">
        <button className="modal__close-button" type="button" onClick={onClose}></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit} action="#" name={`modal_${name}_form`} noValidate>
        {children}
        <button type="submit" className="modal__button modal__button_action">{text}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;