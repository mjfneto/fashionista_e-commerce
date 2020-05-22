import React from 'react';
import logo from '../../assets/images/fashionista-logo.svg';
import './Header.css';
import useSVGIcon from '../../hooks/useSVGIcon';

const Header = () => {
  const [SearchIcon] = useSVGIcon({
    icon: 'search',
    className: 'search',
  });
  const [ShoppingBagIcon] = useSVGIcon({
    icon: 'shoppingBag',
  });
  const [WishListIcon] = useSVGIcon({ icon: 'wishlist' });

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <a href="/">
          <img
            className="header__logo"
            src={logo}
            alt="Fashionista logo"
          />
        </a>
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
