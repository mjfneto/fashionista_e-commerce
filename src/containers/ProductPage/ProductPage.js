import React, { useState } from 'react';
import fallbackPlaceholder from '../../assets/images/fallback-placeholder.png';
import './ProductPage.css';

const Product = ({ location }) => {
  const [placeholder, setPlaceholder] = useState(false);
  const { state } = location;

  const {
    name,
    image,
    regular_price,
    on_sale,
    actual_price,
    installments,
    sizes,
  } = state;

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  return (
    <section className="container">
      <figure className="product-page">
        <img
          className="product-page__image"
          onError={handleImageLoadError}
          src={!placeholder ? image : fallbackPlaceholder}
          alt={name}
        />
        <figcaption className="product-page__details-wrapper">
          <div className="product-page__details">
            <h2>{name}</h2>
            <p
              className={`product-page__pricing${
                on_sale ? '--green' : ''
              }`}
            >
              {on_sale && (
                <>
                  <span className="product-page__detail--regular">
                    {regular_price}
                  </span>
                  <span className="product-page__detail--relational">
                    {' '}
                    ➔{' '}
                  </span>
                </>
              )}
              {actual_price}
            </p>
            <p>{installments}</p>
            <h3>Escolha o tamanho:</h3>
            <form className="product-page__form">
              <div className="product-page__radio-group">
                {sizes
                  .filter(({ available }) => available)
                  .map(({ size }, idx) => (
                    <div
                      key={`size-${size}`}
                      className="product-page__radio"
                    >
                      <input
                        id={`size-${idx}`}
                        type="radio"
                        name="size"
                        value={size}
                      ></input>
                      <label htmlFor={`size-${idx}`}>
                        {size}
                      </label>
                    </div>
                  ))}
              </div>
              <input
                className="product-page__submit"
                type="submit"
                value="Adicionar à bolsa de compras"
              />
            </form>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Product;
