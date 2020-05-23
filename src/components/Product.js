import React, { useState } from 'react';
import fallbackPlaceholder from '../assets/images/fallback-placeholder.png';
import './Product.css';

const Product = ({ product }) => {
  const [placeholder, setPlaceholder] = useState(false);

  const {
    name,
    image,
    on_sale,
    actual_price,
    discount_percentage,
  } = product;

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  return (
    <figure className="product" data-testid="product">
      <a href="/" className="product__image-wrapper">
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
          <p>{actual_price}</p>
        </figcaption>
      </a>
    </figure>
  );
};

export default Product;
