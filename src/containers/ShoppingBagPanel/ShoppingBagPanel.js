import React from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';

import './ShoppingBagPanel.css';

const ShoppingBagPanel = ({
  shoppingBag,
  toggleNavSlider,
  onShoppingBagAction,
}) => {
  const [ReturnIcon] = useSVGIcon({ icon: 'return' });

  return (
    <div className="bag-panel">
      <nav className="bag-panel__nav">
        <button onClick={() => toggleNavSlider()} className="bag-panel__button">
          <ReturnIcon />
        </button>
        <h2 className="bag-panel__title">
          Itens {`(${shoppingBag.bagQuantity})`}
        </h2>
      </nav>
      <ul className="bag-panel__items">
        {shoppingBag.items.length ? (
          shoppingBag.items.map((bagItem, idx) => {
            return (
              <li className="bag-panel__item" key={`item-${idx}`}>
                <ShoppingBagItem
                  bagItem={bagItem}
                  onShoppingBagAction={onShoppingBagAction}
                />
              </li>
            );
          })
        ) : (
          <li className="bag-panel__no-items" id="no-items">
            <span
              className="bag-panel__bag-emoji"
              role="img"
              aria-label="Duas sacolas de compras coloridas"
            >
              🛍️
            </span>
            <p>Sua sacola está vazia!</p>
          </li>
        )}
      </ul>
      <div className="bag-panel__subtotal-wrapper">
        <p className="bag-panel__subtotal">
          Subtotal - R$ {shoppingBag.subtotal.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
};

export default ShoppingBagPanel;
