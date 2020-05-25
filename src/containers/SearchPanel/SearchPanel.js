import React from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import './SearchPanel.css';

const SearchPanel = ({ toggleNavSlider }) => {
  const [ReturnIcon] = useSVGIcon({ icon: 'return' });

  return (
    <div className="search__controls">
      <nav className="search__nav">
        <button
          onClick={() => toggleNavSlider()}
          className="search__button"
        >
          <ReturnIcon />
        </button>
        <h2 className="search__title">
          Buscar por produto
        </h2>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Buscar por produto"
          className="search__input"
        ></input>
      </div>
    </div>
  );
};

export default SearchPanel;
