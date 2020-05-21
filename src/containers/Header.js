import React from 'react';
import logo from '../assets/images/fashionista-logo.svg';
import './Header.css';
import useSVGIcon from '../hooks/useSVGIcon';

const Header = () => {
  const [SearchIcon] = useSVGIcon('search');
  const [ShoppingBagIcon] = useSVGIcon('shoppingBag');
  const [WishListIcon] = useSVGIcon('wishList');

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <img
          className="header__logo"
          src={logo}
          alt="Fashionista logo"
        />
        <nav className="header__nav">
          <SearchIcon />
          <WishListIcon />
          <ShoppingBagIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
