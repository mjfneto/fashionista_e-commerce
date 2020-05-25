import React from 'react';
import SVGLib from '../../assets/SVGLib';
import './SVGIcon.css';

const useSVGIcon = ({ icon }) => {
  return [() => <>{SVGLib.getSVG(icon)}</>];
};

export default useSVGIcon;
