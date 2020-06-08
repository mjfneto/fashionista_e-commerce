import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ product, addItem }) => {
  const { sizes } = product;
  const [checkedRadio, setCheckedRadio] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input[type="radio"]');

    for (let input of inputs) {
      input.checked && addItem({ ...product, sizeChoice: input.value });
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="product-form">
      <div
        className="product-form__radio-group"
        aria-label="Tamanhos disponíveis"
      >
        {sizes
          .filter(({ available }) => available)
          .map(({ size }, idx) => (
            <div key={`size-${size}`}>
              <input
                id={`size-${idx}`}
                onClick={() => setCheckedRadio(idx)}
                aria-checked={checkedRadio === idx}
                className="product-form__radio"
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
