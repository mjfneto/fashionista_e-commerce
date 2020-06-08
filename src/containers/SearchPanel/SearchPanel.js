import React, { useEffect, useRef } from 'react';
import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';
import SearchResult from '../../components/SearchResult/SearchResult';
import './SearchPanel.css';

const SearchPanel = ({
  showingProducts,
  queryProducts,
  clearQuery,
  closeSlider,
}) => {
  const [ReturnIcon] = useSVGIcon({ icon: 'return' });
  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className="search-panel">
      <nav className="search-panel__nav">
        <button onClick={closeSlider} className="search-panel__button">
          <ReturnIcon />
        </button>
        <h2 id="search-panel-heading" className="search-panel__title">
          Buscar por produto
        </h2>
      </nav>
      <div>
        <input
          ref={searchInputRef}
          onChange={(e) =>
            e.target.value.trim() !== ''
              ? queryProducts(e.target.value)
              : clearQuery()
          }
          type="text"
          placeholder="Buscar por produto"
          className="search-panel__input"
        ></input>
      </div>
      <ul className="search-panel__results">
        {showingProducts.length ? (
          showingProducts.map((product, idx) => {
            return (
              <li className="search-panel__item" key={`result-${idx}`}>
                <SearchResult product={product} closeSlider={closeSlider} />
              </li>
            );
          })
        ) : (
          <li className="search-panel__no-results">
            <p>Nenhum item encontrado</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchPanel;
