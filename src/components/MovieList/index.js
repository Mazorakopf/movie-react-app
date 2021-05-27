import React from 'react';
import PropTypes from 'prop-types';
import MovieNavbar from './MovieNavBar';
import MovieListItem from './MovieListItem';
import S from './style.module.scss';

const MovieList = ({ movies, openMovieModal, openMovieDetails }) => (
  <div className={S.mainBlock}>
    <MovieNavbar />
    <span className={S.counter}>
      <span className={S.count}>{movies.length}</span> movies found
    </span>
    <div className={S.listBlock}>
      {movies.map((movie) => (
        <MovieListItem { ...{ movie, openMovieModal, openMovieDetails } } key={movie.id} />
      ))}
    </div>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  openMovieModal: PropTypes.func.isRequired,
  openMovieDetails: PropTypes.func.isRequired,
};

export default MovieList;
