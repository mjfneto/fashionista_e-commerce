import React, { useState, useCallback, useEffect, useRef } from 'react';

import useSVGIcon from '../../hooks/useSVGIcon/useSVGIcon';

import { toAltName } from '../../modules/utils';

import fallbackPlaceholder from '../../assets/images/fallback-placeholder.png';

import './LensImage.css';

export default LensImage;

function LensImage({ name, image }) {
  const [visibleIcon, setVisibleIcon] = useState(false);
  const [activeLens, setActiveLens] = useState(false);
  const [zoomFactor, setZoomFactor] = useState(2.5);
  const [lensRatio, setLensRatio] = useState(null);
  const [lensPos, setLensPos] = useState(null);
  const [cursorPos, setCursorPos] = useState(null);
  const imgRef = useRef();
  const lensRef = useRef();
  const iconRef = useRef();

  const [LensIcon] = useSVGIcon({ icon: 'lens' });
  const [placeholder, setPlaceholder] = useState(false);

  const altName = toAltName(name);

  function getCursorPos(e) {
    // Implementation by: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_zoom
    e = e || window.event;

    const img = imgRef.current;
    let x = 0,
      y = 0;

    /*get the x and y positions of the image:*/
    let { left, top } = img.getBoundingClientRect();

    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - left;
    y = e.pageY - top;

    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x, y };
  }

  const handleImageLoadError = () => {
    setPlaceholder(true);
  };

  const onImgLoad = useCallback(() => {
    const img = imgRef.current;
    const lens = lensRef.current;

    lens.style.backgroundImage = `url(${img.src} )`;

    let cx, cy;

    cx = img.offsetWidth / lens.offsetWidth / zoomFactor;
    cy = img.offsetHeight / lens.offsetHeight / zoomFactor;

    setLensRatio({ cx, cy });
    setVisibleIcon(true);
  }, [zoomFactor]);

  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    let cx, cy;

    cx = img.offsetWidth / lens.offsetWidth / zoomFactor;
    cy = img.offsetHeight / lens.offsetHeight / zoomFactor;

    setLensRatio({ cx, cy });
  }, [zoomFactor]);

  useEffect(() => {
    if (!cursorPos) return;

    {
      const img = imgRef.current;
      const lens = lensRef.current;
      let x, y;

      /*calculate the position of the lens:*/
      x = cursorPos.x - lens.offsetWidth / 2;
      y = cursorPos.y - lens.offsetHeight / 2;

      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }

      setLensPos({ x, y });
    }
  }, [cursorPos]);

  useEffect(() => {
    if (!lensRatio || !lensPos) return;

    {
      const img = imgRef.current;
      const lens = lensRef.current;

      const { cx, cy } = lensRatio;
      const { x, y } = lensPos;

      /*set the position of the lens:*/
      lens.style.left = x + 'px';
      lens.style.top = y + 'px';

      /*display what the lens "sees":*/
      lens.style.backgroundSize =
        img.width * cx + 'px ' + img.height * cy + 'px';
      lens.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
    }
  }, [lensRatio, lensPos]);

  const moveLens = (e) => {
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    setCursorPos(getCursorPos(e));
  };

  const handleZoom = (e) => {
    const newZoomFactor = e.deltaY < 0 ? zoomFactor - 0.5 : zoomFactor + 0.5;
    let min = 2.5,
      max = 1;

    setZoomFactor(
      newZoomFactor < max ? min : newZoomFactor > min ? max : newZoomFactor
    );
    setCursorPos(getCursorPos(e));
  };

  const activateLens = () => {
    setActiveLens(true);
  };

  const readyLens = (e) => {
    setCursorPos(getCursorPos(e));
  };

  const reset = (e) => {
    e.preventDefault();

    setActiveLens(false);
    zoomFactor !== 2.5 && setZoomFactor(2.5);
    cursorPos !== null && setCursorPos(null);
  };

  const zoomText = (zoomFactor) => {
    switch (zoomFactor) {
      case 1:
        return '5x';
      case 1.5:
        return '4x';
      case 2:
        return '3x';
      default:
        return '2x';
    }
  };

  return (
    <div className="lens-image__wrapper">
      <img
        className="lens-image__image"
        onError={handleImageLoadError}
        src={!placeholder ? image : fallbackPlaceholder}
        alt={altName}
        ref={imgRef}
        onLoad={onImgLoad}
        onMouseMove={activeLens ? moveLens : null}
      />

      <button
        onClick={activateLens}
        className={`lens-image__button${activeLens ? ' active' : ''}`}
        ref={iconRef}
        onMouseEnter={readyLens}
      >
        {visibleIcon && <LensIcon />}
      </button>

      <div
        className={`lens-image__lens${activeLens ? ' active' : ''}`}
        ref={lensRef}
        onMouseMove={activeLens ? moveLens : null}
        onMouseLeave={activeLens ? reset : null}
        onWheel={activeLens ? handleZoom : null}
      >
        {zoomText(zoomFactor)}
      </div>
    </div>
  );
}
