import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem } from '@rmwc/list';
import styles from './nav-item.module.css';

const NavItem = ({ path, name, onClick }) => (
  <ListItem className={styles['nav-item']} tabIndex="-1">
    <Link to={path} onClick={onClick}>
      {name}
    </Link>
  </ListItem>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItem;
