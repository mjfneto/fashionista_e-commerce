import React from 'react';
import './ProductForm.css';

const ProductForm = ({ product, onShoppingBagAction }) => {
  const { sizes } = product;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input[type="radio"]');

    for (let input of inputs) {
      input.checked &&
        onShoppingBagAction({
          type: 'ADD',
          item: { ...product, sizeChoice: input.value },
        });
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="product-form">
      <div className="product-form__radio-group">
        {sizes
          .filter(({ available }) => available)
          .map(({ size }, idx) => (
            <div key={`size-${size}`} className="product-form__radio">
              <input
                id={`size-${idx}`}
                type="radio"
                name="size"
                value={size}
                required={idx == 0 ? true : null}
              ></input>
              <label htmlFor={`size-${idx}`}>{size}</label>
            </div>
          ))}
      </div>
      <input
        className="product-form__submit"
        type="submit"
        value="Adicionar à bolsa de compras"
      />
    </form>
  );
};

export default ProductForm;
