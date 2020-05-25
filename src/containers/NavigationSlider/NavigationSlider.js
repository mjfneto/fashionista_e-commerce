import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './NavigationSlider.css';

const navigationSliderRoot = document.getElementById(
  'nav-slider'
);

const NavigationSlider = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    navigationSliderRoot.appendChild(elRef.current);
    navigationSliderRoot.classList.add('open');
    return () => {
      navigationSliderRoot.classList.remove('open');
      navigationSliderRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <div className={`slider`}>{children}</div>,
    elRef.current
  );
};

export default NavigationSlider;
