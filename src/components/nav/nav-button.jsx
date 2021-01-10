import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import '@rmwc/button/dist/styles';
import '@rmwc/icon/dist/styles';

const NavButton = ({ onClick, isOpen }) => (
  <Button
    onClick={onClick}
    disabled={isOpen}
    ripple={false}
    icon={{
      icon: 'menu',
      size: 'large',
      style: {
        color: '#fff',
        fontSize: '2.25rem',
        width: '1em',
        height: '1em',
      },
    }}
  />
);

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

NavButton.defaultProps = {
  isOpen: false,
};

export default NavButton;
