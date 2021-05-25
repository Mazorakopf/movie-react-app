import React from 'react';
import PropTypes from 'prop-types';
import MovieNavbar from './MovieNavBar';
import MovieListItem from './MovieListItem';
import styles from './style.module.scss';

const MovieList = (props) => {
  const { moviePreviews } = props;

  return (
    <div className={styles.mainBlock}>
      <MovieNavbar />
      <span className={styles.counter}>
        <span className={styles.count}>{moviePreviews.length}</span> movies
        found
      </span>
      <div className={styles.listBlock}>
        {moviePreviews.map((preview, i) => (
          <MovieListItem
            {...preview}
            open={props.open}
            clickCard={props.clickCard}
            key={`${preview.title}_${i}`}
          />
        ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  moviePreviews: PropTypes.array.isRequired,
};

export default MovieList;
