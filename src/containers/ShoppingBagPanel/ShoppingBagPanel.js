import React from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';

import './ShoppingBagPanel.css';

const ShoppingBagPanel = ({ toggleNavSlider }) => {
  const [ReturnIcon] = useSVGIcon({ icon: 'return' });

  return (
    <div className="bag-panel">
      <nav className="bag-panel__nav">
        <button onClick={() => toggleNavSlider()} className="bag-panel__button">
          <ReturnIcon />
        </button>
        <h2 className="bag-panel__title">Itens {'(6)'}</h2>
      </nav>
      <ul className="bag-panel__items">
        <li className="bag-panel__item">
          <ShoppingBagItem />
        </li>
      </ul>
    </div>
  );
};

export default ShoppingBagPanel;
