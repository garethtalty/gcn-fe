import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem } from '@rmwc/list';

const NavItem = ({ path, name }) => (
  <ListItem>
    <Link to={path}>{name}</Link>
  </ListItem>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
