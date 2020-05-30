import React, { useState } from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import fallbackPlaceholder from '../../assets/images/fallback-placeholder.png';

import './ShoppingBagItem.css';

const ShoppingBagItem = ({ bagItem, addItem, removeItem, removeAllItems }) => {
  const [placeholder, setPlaceholder] = useState(false);
  const [AddIcon] = useSVGIcon({ icon: 'add' });
  const [SubtractIcon] = useSVGIcon({ icon: 'subtract' });
  const [RemoveIcon] = useSVGIcon({ icon: 'remove' });

  const {
    name,
    image,
    sizeChoice,
    actual_price,
    installments,
    quantity,
  } = bagItem;

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  const handleAdd = () => {
    addItem(bagItem);
  };

  const handleSubtract = () => {
    removeItem(bagItem);
  };

  const handleRemove = () => {
    removeAllItems(bagItem);
  };

  return (
    <figure className="bag-item">
      <div className="image-wrapper">
        <img
          onError={handleImageLoadError}
          className="bag-item__image"
          src={!placeholder ? image : fallbackPlaceholder}
          alt="name"
        />
      </div>
      <figcaption className="bag-item__details">
        <h3 className="bag-item__title">{name}</h3>
        <p className="bag-item__size">Tamanho: {sizeChoice}</p>
        <p className="bag-item__price">{actual_price}</p>
        <p className="bag-item__installments">{installments}</p>
        <p className="bag-item__quantity">
          Quantidade: <output>{quantity}</output>
        </p>
      </figcaption>
      <div className="bag-item__controls">
        <button onClick={handleAdd} className="bag-item__button">
          <AddIcon />
        </button>
        <button onClick={handleSubtract} className="bag-item__button">
          <SubtractIcon />
        </button>
        <button
          onClick={handleRemove}
          className="bag-item__button bag-item__button--remove"
        >
          <RemoveIcon />
        </button>
      </div>
    </figure>
  );
};

export default ShoppingBagItem;
