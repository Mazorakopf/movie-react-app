import React from 'react';
import PropTypes from 'prop-types';
import SearchGlass from '../../assets/svg/glass.svg';
import S from './style.module.scss';

const MovieDetails = ({ movie, openMovieSearchForm }) => (
  <div className={S.overviewBlock}>
    <img src={movie.imageUrl} className={S.img} alt={movie.imageDesc} />
    <div className={S.descBlock}>
      <h2 className={S.title}>{movie.title}</h2>
      <span className={S.genre}>{movie.genre}</span>
      <div className={S.subDescBlock}>
        <span className={S.releaseDate}>{movie.releaseDate.split('-')[0]}</span>
        <span className={S.runtime}>{movie.runtime} min</span>
      </div>
    </div>
    <button className={S.searchBtn} onClick={openMovieSearchForm}>
      <SearchGlass className={S.searchGlass} />
    </button>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    imageDesc: PropTypes.string,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  openMovieSearchForm: PropTypes.func.isRequired,
};

export default MovieDetails;
