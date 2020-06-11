import React from 'react';

import LensImage from './LensImage';
import ProductForm from '../../components/ProductForm/ProductForm';

import './ProductPage.css';

const ProductPage = ({ location, addItem }) => {
  const { state } = location;

  const {
    name,
    image,
    regular_price,
    on_sale,
    actual_price,
    installments,
  } = state;

  return (
    <section className="container" data-testid="product-page">
      <figure className="product-page">
        <LensImage name={name} image={image} />
        <figcaption className="product-page__details-wrapper">
          <div className="product-page__details">
            <h2>{name}</h2>
            <p className={`product-page__pricing${on_sale ? '--green' : ''}`}>
              {on_sale && (
                <>
                  <span className="product-page__detail--regular">
                    {regular_price}
                  </span>
                  <span className="product-page__detail--relational"> ➔ </span>
                </>
              )}
              {actual_price}
            </p>
            <p>{installments}</p>
            <h3>Escolha o tamanho:</h3>
            <ProductForm product={state} addItem={addItem} />
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default ProductPage;
