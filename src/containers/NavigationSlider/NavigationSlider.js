import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './NavigationSlider.css';

const navigationSliderRoot = document.getElementById('nav-slider');

const NavigationSlider = ({ children }) => {
  useEffect(() => {
    navigationSliderRoot.classList.add('open');
    return () => {
      navigationSliderRoot.classList.remove('open');
    };
  }, []);

  return createPortal(<>{children}</>, navigationSliderRoot);
};

export default NavigationSlider;
