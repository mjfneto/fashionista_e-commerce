import React, { useState, useRef, useEffect } from 'react';

import './Sticky.css';

const Sticky = ({ children }) => {
  const [sticky, setSticky] = useState(false);
  const ref = useRef();
  const benchwarmerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', stickyOnScroll);

    sticky && window.addEventListener('resize', benchwarmerOnResize);

    return () => {
      window.removeEventListener('scroll', stickyOnScroll);
      window.removeEventListener('resize', benchwarmerOnResize);
    };

    // ***********

    function stickyOnScroll() {
      let pageY = window.pageYOffset;
      let top = ref.current.offsetTop;

      if (pageY > top && !sticky) {
        setSticky(true);
      }

      if (pageY === top && sticky) {
        setSticky(false);
      }
    }

    function benchwarmerOnResize() {
      benchwarmerRef.current.style.height = window.getComputedStyle(
        ref.current.firstChild
      ).height;
    }
  }, [sticky]);

  const benchwarmer = sticky
    ? {
        height: window.getComputedStyle(ref.current.firstChild).height,
        display: 'block',
      }
    : null;

  return (
    <>
      {sticky && (
        <div
          tabIndex="-1"
          className="sticky--benchwarmer"
          style={benchwarmer}
          ref={benchwarmerRef}
        ></div>
      )}
      <div className={`sticky${sticky ? ' active' : ''}`} ref={ref}>
        {children}
      </div>
    </>
  );
};

export default Sticky;
