import React from 'react';

const Catalog = ({ products }) => {
  return (
    <main className="catalog" data-testid="catalog">
      {products && null}
    </main>
  );
};

export default Catalog;
