import React from 'react';
import PropTypes from 'prop-types';
import SearchGlass from '../../assets/svg/glass.svg';
import S from './style.module.scss';
import { connect } from 'react-redux';
import { openMovieSearchForm } from '../../pages/MovieSearch/action.creator';

const MovieDetails = ({ movieDetails, openMovieSearchForm }) => (
  <div className={S.overviewBlock}>
    <img src={movieDetails.poster_path} className={S.img} alt="Movie details pic" />
    <div className={S.descBlock}>
      <h2 className={S.title}>{movieDetails.title}</h2>
      <span className={S.genre}>{movieDetails.genre}</span>
      <div className={S.subDescBlock}>
        <span className={S.releaseDate}>{movieDetails.release_year}</span>
        <span className={S.runtime}>{movieDetails.runtime} min</span>
      </div>
      <span className={S.overviewText}>{movieDetails.overview}</span>
    </div>
    <button className={S.searchBtn} onClick={openMovieSearchForm}>
      <SearchGlass className={S.searchGlass} />
    </button>
  </div>
);

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  openMovieSearchForm: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movieSearchPage }) => ({
  movieDetails: movieSearchPage.movieDetails,
});

const mapDispatchToProps = (dispatch) => ({
  openMovieSearchForm: openMovieSearchForm(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
