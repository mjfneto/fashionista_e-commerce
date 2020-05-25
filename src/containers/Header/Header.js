import React from 'react';
import { Link } from '@reach/router';
import logo from '../../assets/images/fashionista-logo.svg';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import './Header.css';

const Header = ({ toggleNavSlider }) => {
  const [SearchIcon] = useSVGIcon({
    icon: 'search',
    handlers: { toggleNavSlider },
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
          <button
            onClick={() => toggleNavSlider('search')}
            className="header__button"
          >
            <SearchIcon />
          </button>
          <button className="header__button">
            <WishListIcon />
          </button>
          <button className="header__button">
            <ShoppingBagIcon />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
