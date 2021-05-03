import React from 'react';
import styles from './style.module.scss';

export default () => (
  <ul className={styles.navBar}>
    <li className={styles.left}><a href="#all">all</a></li>
    <li className={styles.left}><a href="#documentary">documentary</a></li>
    <li className={styles.left}><a href="#comedy">comedy</a></li>
    <li className={styles.left}><a href="#horror">horror</a></li>
    <li className={styles.left}><a href="#crime">crime</a></li>
    <li className={styles.right}>
      <span>sort by</span>
      <select name="sortOptions">
        <option value="releaseDate">release data</option>
        <option value="mostViewed">most viewed</option>
      </select>
    </li>
  </ul>
);
