import React from 'react';
import { MovieModalType } from '../../MovieModal/util';
import PropTypes from 'prop-types';
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
        <img src={movie.imageUrl} className={S.img} alt={movie.imageDesc} />
        <div className={S.desc}>
          <h2 className={S.title}>{movie.title}</h2>
          <span className={S.releaseDate}>
            {movie.releaseDate.split('-')[0]}
          </span>
        </div>
        <span className={S.genre}>{movie.genre}</span>
      </div>
    </div>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    imageDesc: PropTypes.string,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  openMovieModal: PropTypes.func.isRequired,
  openMovieDetails: PropTypes.func.isRequired,
};

export default MoviesListItem;
