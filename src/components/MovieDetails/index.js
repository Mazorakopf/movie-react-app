import React from 'react';
import PropTypes from 'prop-types';
import SearchGlass from '../../assets/svg/glass.svg';
import S from './style.module.scss';

const MovieDetails = ({ movie, openMovieSearchForm }) => (
  <div className={S.overviewBlock}>
    <img src={movie.poster_path} className={S.img} alt="Movie details pic" />
    <div className={S.descBlock}>
      <h2 className={S.title}>{movie.title}</h2>
      <span className={S.genre}>{movie.genre}</span>
      <div className={S.subDescBlock}>
        <span className={S.releaseDate}>{movie.release_year}</span>
        <span className={S.runtime}>{movie.runtime} min</span>
      </div>
      <span className={S.overviewText}>{movie.overview}</span>
    </div>
    <button className={S.searchBtn} onClick={openMovieSearchForm}>
      <SearchGlass className={S.searchGlass} />
    </button>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  openMovieSearchForm: PropTypes.func.isRequired,
};

export default MovieDetails;
