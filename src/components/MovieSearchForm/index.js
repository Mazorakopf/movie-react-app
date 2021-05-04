import React from 'react';
import styles from './style.module.scss';

export default () => (
  <div className={styles.mainBlock}>
    <button className={styles.addMovieBtn}>+add movie</button>
    <div className={styles.searchBlock}>
      <h1 className={styles.title}>Find your movie</h1>
      <form className={styles.form}>
        <input className={styles.searchInput} type="text" name="search" placeholder="What do you want to watch?"/>
        <input className={styles.submitBtn} type="submit" value="Search" />
      </form>
    </div>
  </div>
);
