import React, { useState } from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import fallbackPlaceholder from '../../assets/images/fallback-placeholder.png';

import './ShoppingBagItem.css';

const ShoppingBagItem = () => {
  const [placeholder, setPlaceholder] = useState(false);
  const [AddIcon] = useSVGIcon({ icon: 'add' });
  const [SubtractIcon] = useSVGIcon({ icon: 'subtract' });
  const [RemoveIcon] = useSVGIcon({ icon: 'remove' });

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  return (
    <figure className="bag-item">
      <div className="image-wrapper">
        <img
          onError={handleImageLoadError}
          className="bag-item__image"
          src={!placeholder && fallbackPlaceholder}
          alt="name"
        />
      </div>
      <figcaption className="bag-item__details">
        <h3 className="bag-item__title">name</h3>
        <p className="bag-item__size">Size</p>
        <p className="bag-item__price">Price</p>
        <p className="bag-item__installments">Installments</p>
        <p className="bag-item__quantity">
          Quantity: <output>{'6'}</output>
        </p>
      </figcaption>
      <div className="bag-item__controls">
        <button className="bag-item__button">
          <AddIcon />
        </button>
        <button className="bag-item__button">
          <SubtractIcon />
        </button>
        <button className="bag-item__button bag-item__button--remove">
          <RemoveIcon />
        </button>
      </div>
    </figure>
  );
};

export default ShoppingBagItem;
