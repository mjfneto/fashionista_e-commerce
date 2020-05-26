import React, { useState } from 'react';
import { Link } from '@reach/router';

import fallbackPlaceholder from '../../assets/images/fallback-placeholder.png';
import './SearchResult.css';

const SearchResult = ({ product, toggleNavSlider }) => {
  const [placeholder, setPlaceholder] = useState();
  const { name, image, actual_price, installments } = product;

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  const routeName = name.trim().toLowerCase().replace(/ /g, '-');

  return (
    <Link
      className="search-result"
      to={`/produto/${routeName}`}
      state={{ ...product }}
      onClick={() => toggleNavSlider('')}
    >
      <figure className="search-result__content">
        <div className="image-wrapper">
          <img
            onError={handleImageLoadError}
            className="search-result__image"
            src={!placeholder ? image : fallbackPlaceholder}
            alt={name}
          />
        </div>
        <figcaption className="search-result__details">
          <h3 className="search-result__title">{name}</h3>
          <p className="search-result__price">{actual_price}</p>
          <p className="search-result__installments">{installments}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default SearchResult;
