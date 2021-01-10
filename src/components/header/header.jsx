import React from 'react';
import styles from './header.module.css';
import Logo from '../logo';

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export default Header;
