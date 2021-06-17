import React from 'react';
import PropTypes from 'prop-types';
import MovieNavbar from './MovieNavBar';
import MovieListItem from './MovieListItem';
import S from './style.module.scss';
import { connect } from 'react-redux';

const MovieList = ({ movies }) => (
  <div className={S.mainBlock}>
    <MovieNavbar />
    <span className={S.counter}>
      <span className={S.count}>{movies.length}</span> movies found
    </span>
    <div className={S.listBlock}>
      {movies.map((movie) => <MovieListItem movie={movie} key={movie.id} />)}
    </div>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = ({ movieSearchPage }) => ({
  movies: movieSearchPage.movies,
});

export default connect(mapStateToProps)(MovieList);
