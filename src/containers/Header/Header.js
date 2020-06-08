import React from 'react';
import { Link } from '@reach/router';

import logo from '../../assets/images/fashionista-logo.svg';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';

import Sticky from './Sticky';

import './Header.css';

const Header = ({ openSearchSlider, openShoppingBagSlider, bagQuantity }) => {
  const [SearchIcon] = useSVGIcon({
    icon: 'search',
  });
  const [ShoppingBagIcon] = useSVGIcon({
    icon: 'shoppingBag',
    counter: true,
  });

  return (
    <Sticky>
      <header className="header" data-testid="header">
        <div className="container">
          <Link to="/" data-testid="home-link">
            <img className="header__logo" src={logo} alt="Fashionista logo" />
          </Link>
          <nav className="header__nav">
            <button onClick={openSearchSlider} className="header__button">
              <SearchIcon />
            </button>
            <button onClick={openShoppingBagSlider} className="header__button">
              <ShoppingBagIcon bagQuantity={bagQuantity} />
            </button>
          </nav>
        </div>
      </header>
    </Sticky>
  );
};

export default Header;
