import React, { useState } from 'react';
import { Link } from '@reach/router';
import fallbackPlaceholder from '../../assets/images/fallback-placeholder.png';
import './Product.css';

const Product = ({ product }) => {
  const [placeholder, setPlaceholder] = useState(false);

  const {
    name,
    image,
    on_sale,
    regular_price,
    actual_price,
    discount_percentage,
  } = product;

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  const routeName = name
    .trim()
    .toLowerCase()
    .replace(/ /g, '-');

  return (
    <Link
      to={`/produto/${routeName}`}
      state={{ ...product }}
      className="product"
      data-testid="product"
    >
      <figure className="product__image-wrapper">
        <span className="product__discount-tag">
          {on_sale && `-${discount_percentage}`}
        </span>
        <img
          onError={handleImageLoadError}
          className="product__image"
          src={!placeholder ? image : fallbackPlaceholder}
          alt={name}
          title={name}
        />
        <figcaption className="product__details">
          <h3 className="product__name">{name}</h3>
          <p
            className={`product__pricing${
              on_sale ? '--green' : ''
            }`}
          >
            {on_sale && (
              <>
                <span className="product__detail--regular">
                  {regular_price}
                </span>
                <span className="product__detail--relational">
                  {' '}
                  ➔{' '}
                </span>
              </>
            )}
            {actual_price}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Product;
