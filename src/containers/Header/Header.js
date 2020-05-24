import React from 'react';
import { Link } from '@reach/router';
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
        <Link to="/" data-testid="home-link">
          <img
            className="header__logo"
            src={logo}
            alt="Fashionista logo"
          />
        </Link>
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
