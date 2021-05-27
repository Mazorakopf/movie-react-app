import React from 'react';
import S from './style.module.scss';

export default () => (
  <ul className={S.navBar}>
    <li className={S.left}><a href="#all">all</a></li>
    <li className={S.left}><a href="#documentary">documentary</a></li>
    <li className={S.left}><a href="#comedy">comedy</a></li>
    <li className={S.left}><a href="#horror">horror</a></li>
    <li className={S.left}><a href="#crime">crime</a></li>
    <li className={S.right}>
      <span>sort by</span>
      <select name="sortOptions">
        <option value="releaseDate">release data</option>
        <option value="mostViewed">most viewed</option>
      </select>
    </li>
  </ul>
);
