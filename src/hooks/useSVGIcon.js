import React from 'react';
import SVGLib from '../assets/SVGLib';

const useSVGIcon = ({ icon, ...config }) => {
  return [
    () => (
      <a className="svg-wrapper" href="/">
        {SVGLib[icon](config)}
      </a>
    ),
  ];
};

export default useSVGIcon;
