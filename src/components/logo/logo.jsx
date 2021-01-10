import React from 'react';
import { ReactComponent as GCNLogo } from '../../assets/GCNLogoTxt.svg';
import styles from './logo.module.css';

const Logo = () => (
  <>
    <GCNLogo className={styles.logo} />
  </>
);

export default Logo;
