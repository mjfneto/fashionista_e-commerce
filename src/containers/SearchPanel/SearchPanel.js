import React from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import './SearchPanel.css';

const SearchPanel = ({
  results,
  toggleNavSlider,
  onSearchInput,
}) => {
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
          onChange={(e) => onSearchInput(e.target.value)}
          type="text"
          placeholder="Buscar por produto"
          className="search__input"
        ></input>
      </div>
      <ul className="search__results">
        {results.map(({ name }, idx) => {
          return <li key={`result-${idx}`}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchPanel;
