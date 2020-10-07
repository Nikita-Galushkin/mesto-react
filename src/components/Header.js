import React from 'react';
import logoImage from '../images/logo-header.svg';

function Header() {
  return (
    <header className="header page__header section">
      <img className="logo header__logo" src={logoImage} alt="Логотип" />
    </header>
  );
}

export default Header;