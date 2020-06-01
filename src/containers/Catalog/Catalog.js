import React from 'react';
import Product from '../../components/Product/Product';
import './Catalog.css';

const Catalog = ({ loading, products }) => {
  return (
    <main className="catalog container" data-testid="catalog">
      <p className="catalog__size">{!loading ? products.length : 0} itens</p>
      <div className="catalog__products">
        {loading ? 'Carregando...' : null}
        {products &&
          products.map((product, idx) => (
            <Product
              key={`product-${idx}`}
              className="catalog__product"
              product={product}
            />
          ))}
      </div>
    </main>
  );
};

export default Catalog;
