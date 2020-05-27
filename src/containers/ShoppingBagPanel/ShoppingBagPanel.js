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
        <h2 className="bag-panel__title">Itens {`(${shoppingBag.length})`}</h2>
      </nav>
      <ul className="bag-panel__items">
        {shoppingBag.length
          ? shoppingBag.map((bagItem, idx) => {
              return (
                <li className="bag-panel__item" key={`item-${idx}`}>
                  <ShoppingBagItem
                    bagItem={bagItem}
                    onShoppingBagAction={onShoppingBagAction}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default ShoppingBagPanel;
