import React from 'react';
import Product from '../../components/Product/Product';
import './Catalog.css';

const Catalog = ({ products }) => {
  return (
    <main className="catalog container" data-testid="catalog">
      <p className="catalog__size">{products.length} itens</p>
      <div className="catalog__products">
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
