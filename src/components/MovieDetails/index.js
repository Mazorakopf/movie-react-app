import React from 'react';
import PropTypes from 'prop-types';
import SearchGlass from '../../assets/svg/glass.svg';
import styles from './style.module.scss';

const MovieDetails = ({imageUrl, imageDesc, title, genre, releaseDate, runtime, clickSearch,}) => (
  <div className={styles.overviewBlock}>
    <img src={imageUrl} className={styles.img} alt={imageDesc} />
    <div className={styles.descBlock}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.genre}>{genre}</span>
      <div className={styles.subDescBlock}>
        <span className={styles.releaseDate}>{releaseDate.split('-')[0]}</span>
        <span className={styles.runtime}>{runtime} min</span>
      </div>
    </div>
    <button className={styles.searchBtn} onClick={clickSearch}>
      <SearchGlass className={styles.searchGlass} />
    </button>
  </div>
);

MovieDetails.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageDesc: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MovieDetails;
