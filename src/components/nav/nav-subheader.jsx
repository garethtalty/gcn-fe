import React, { useRef, useEffect } from 'react';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';

import styles from './nav-subheader.module.css';

const NavSubheader = ({ children, setSticky, isSticky }) => {
  const ref = useRef(null);
  let prevScrollY = 0;
  const handleScroll = () => {
    if (ref.current) {
      const scrolledDown = (scrollY) => scrollY >= prevScrollY;
      const handleSetSticky = (sticky) => setSticky(sticky);
      const { scrollY } = window;
      if (scrollY === 0) {
        return;
      }
      const didScrollDown = scrolledDown(scrollY);
      const didScrollUp = !didScrollDown;

      if (didScrollDown) {
        handleSetSticky(false);
      } else if (didScrollUp) {
        handleSetSticky(true);
      }

      prevScrollY = scrollY;
    }
  };

  const throttledScroll = throttle(handleScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', () => throttledScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${styles.subheader}
        ${isSticky ? styles.sticky : ''}
      `}
      data-test-id="nav-subheader"
    >
      {children}
    </div>
  );
};

NavSubheader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  setSticky: PropTypes.func.isRequired,
  isSticky: PropTypes.bool.isRequired,
};

export default NavSubheader;
