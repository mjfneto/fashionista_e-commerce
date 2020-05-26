import React from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import SearchResult from '../../components/SearchResult/SearchResult';
import './SearchPanel.css';

const SearchPanel = ({ results, toggleNavSlider, onSearchInput }) => {
  const [ReturnIcon] = useSVGIcon({ icon: 'return' });

  return (
    <div className="search-panel">
      <nav className="search-panel__nav">
        <button
          onClick={() => toggleNavSlider()}
          className="search-panel__button"
        >
          <ReturnIcon />
        </button>
        <h2 className="search-panel__title">Buscar por produto</h2>
      </nav>
      <div>
        <input
          onChange={(e) => onSearchInput(e.target.value)}
          type="text"
          placeholder="Buscar por produto"
          className="search-panel__input"
        ></input>
      </div>
      <ul className="search-panel__results">
        {results.length ? (
          results.map((product, idx) => {
            return (
              <li className="search-panel__item" key={`result-${idx}`}>
                <SearchResult
                  product={product}
                  toggleNavSlider={toggleNavSlider}
                />
              </li>
            );
          })
        ) : (
          <li className="search-panel__no-results">
            <p>Nenhum item encontrado :\</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchPanel;
