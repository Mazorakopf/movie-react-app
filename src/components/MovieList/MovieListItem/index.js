import React from 'react';
import { MovieModalType } from '../../MovieModal/util';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openMovieDetails, openMovieModal } from '../../../pages/MovieSearch/action.creator';
import S from './style.module.scss';

const MoviesListItem = ({ movie, openMovieModal, openMovieDetails }) => {
  return (
    <div className={S.item}>
      <div className={S.settingBlock}>
        <button className={S.settingBtn}></button>
        <div className={S.settingContent}>
          <a onClick={() => openMovieModal(MovieModalType.EDIT, movie)}>Edit</a>
          <a onClick={() => openMovieModal(MovieModalType.DELETE, movie)}>Delete</a>
        </div>
      </div>
      <div onClick={() => openMovieDetails(movie)}>
        <img src={movie.poster_path} className={S.img} alt="Movie poster" />
        <div className={S.desc}>
          <h2 className={S.title}>{movie.title}</h2>
          <span className={S.releaseDate}>
            {movie.release_year}
          </span>
        </div>
        <span className={S.genre}>{movie.genre}</span>
      </div>
    </div>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  openMovieModal: PropTypes.func.isRequired,
  openMovieDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  openMovieDetails: openMovieDetails(dispatch),
  openMovieModal: openMovieModal(dispatch),
});

export default connect(null, mapDispatchToProps)(MoviesListItem);
