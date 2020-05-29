import React from 'react';
import SVGLib from '../../assets/SVGLib';
import './SVGIcon.css';

const useSVGIcon = ({ icon, counter }) => {
  const SVGIcon = ({ bagQuantity }) => (
    <div className="svg-icon-wrapper">
      {counter && bagQuantity ? (
        <div className="svg-icon-counter">
          <span>{bagQuantity < 100 ? bagQuantity : '99+'}</span>
        </div>
      ) : null}
      {SVGLib.getSVG(icon)}
    </div>
  );

  return [SVGIcon];
};

export default useSVGIcon;
