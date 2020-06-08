import React, { useRef, useEffect } from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';

import './ShoppingBagPanel.css';

const ShoppingBagPanel = ({
  shoppingBag,
  closeSlider,
  addItem,
  removeItem,
  removeAllItems,
}) => {
  const [ReturnIcon] = useSVGIcon({ icon: 'return' });
  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div className="bag-panel">
      <div className="bag-panel__main-wrapper">
        <nav className="bag-panel__nav">
          <button onClick={closeSlider} className="bag-panel__button">
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
                    focusRef={idx === 0 ? focusRef : null}
                    bagItem={bagItem}
                    addItem={addItem}
                    removeItem={removeItem}
                    removeAllItems={removeAllItems}
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
      </div>
      <div className="bag-panel__subtotal-wrapper">
        <p className="bag-panel__subtotal">
          Subtotal - R$ {shoppingBag.subtotal.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
};

export default ShoppingBagPanel;
