import React from 'react';
import SVGLib from '../assets/SVGLib';

const useSVGIcon = (icon) => {
  return [
    () => (
      <a className="svg-wrapper" href="/">
        <svg
          className={`svg-icon ${icon}`}
          viewBox="0 0 20 20"
        >
          {SVGLib[icon]()}
        </svg>
      </a>
    ),
  ];
};

export default useSVGIcon;
