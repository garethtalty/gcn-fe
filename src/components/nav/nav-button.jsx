import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';

const NavButton = ({ onClick }) => (
  <Button onClick={onClick} raised>
    Toggle
  </Button>
);

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
