import React from 'react';
import styles from './style.module.scss';
import PropTypes from 'prop-types';

const MoviesListItem = (props) => {
  const { imageUrl, imageDesc, title, releaseDate, genre } = props;
  return (
    <div className={styles.item}>
      <div className={styles.settingBlock}>
        <button className={styles.settingBtn}></button>
        <div className={styles.settingContent}>
          <a onClick={props.openEditWindow}>Edit</a>
          <a onClick={props.openDeleteWindow}>Delete</a>
        </div>
      </div>
      <img src={imageUrl} className={styles.img} alt={imageDesc} />
      <div className={styles.desc}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.releaseDate}>{releaseDate.split('-')[0]}</span>
      </div>
      <span className={styles.genre}>{genre}</span>
    </div>
  );
};

MoviesListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageDesc: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MoviesListItem;
