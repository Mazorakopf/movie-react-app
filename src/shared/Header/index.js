import React from 'react';
import NetflixLogoIcon from '../../assets/svg/netflix-logo.svg';
import styles from './style.module.scss';

export default () => (
  <header>
    <NetflixLogoIcon id={styles.logo} alt="Site logo"/>
  </header>
);
