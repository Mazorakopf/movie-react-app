import React from 'react';
import styles from './style.module.scss';
import PropTypes from 'prop-types';

const MoviesListItem = (props) => {
  const { imageUrl, imageDesc, title, releaseDate, genre } = props;
  return (
    <div class={styles.item}>
      <img src={imageUrl} class={styles.img} alt={imageDesc} />
      <div class={styles.desc}>
        <h2 class={styles.title}>{title}</h2>
        <span class={styles.releaseDate}>{releaseDate}</span>
      </div>
      <span class={styles.genre}>{genre}</span>
    </div>
  );
};

MoviesListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageDesc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MoviesListItem;
