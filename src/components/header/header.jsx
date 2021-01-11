import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';
import Logo from '../logo';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <Logo />
    </Link>
  </header>
);

export default Header;
