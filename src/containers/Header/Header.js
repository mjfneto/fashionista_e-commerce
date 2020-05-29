import React from 'react';
import { Link } from '@reach/router';
import logo from '../../assets/images/fashionista-logo.svg';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import './Header.css';

const Header = ({ toggleNavSlider, bagQuantity }) => {
  const [SearchIcon] = useSVGIcon({
    icon: 'search',
    handlers: { toggleNavSlider },
  });
  const [WishListIcon] = useSVGIcon({ icon: 'wishlist' });
  const [ShoppingBagIcon] = useSVGIcon({
    icon: 'shoppingBag',
    counter: true,
  });

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <Link to="/" data-testid="home-link">
          <img className="header__logo" src={logo} alt="Fashionista logo" />
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
          <button
            onClick={() => toggleNavSlider('shoppingBag')}
            className="header__button"
          >
            <ShoppingBagIcon bagQuantity={bagQuantity} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
