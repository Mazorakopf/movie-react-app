import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSelectedMovie, closeMovieModal, resetMovieModal, submitMovieModal } from '../../pages/MovieSearch/action.creator';
import S from './style.module.scss';

const AddEditMovieModal = ({
  title,
  movie,
  closeMovieModal,
  submitMovieModal,
  changeSelectedMovie,
  resetMovieModal,
}) => (
  <div className={S.modal}>
    <button className={S.close} onClick={closeMovieModal} />
    <span>{title} movie</span>
    <label className={S.input}>
      title
      <input
        type="text"
        name="title"
        value={movie.title}
        placeholder="Movie title here"
        onChange={changeSelectedMovie}
      />
    </label>
    <label className={S.input}>
      release date
      <input
        type="date"
        name="release_date"
        value={movie.release_date}
        placeholder="Select Date"
        onChange={changeSelectedMovie}
      />
    </label>
    <label className={S.input}>
      movie url
      <input
        type="url"
        name="poster_path"
        value={movie.poster_path}
        placeholder="Movie URL here"
        onChange={changeSelectedMovie}
      />
    </label>
    <label className={S.input}>
      genre
      <select
        name="genre"
        value={movie.genre}
        placeholder="Select Genre"
        onChange={changeSelectedMovie}
      >
        <option value="Documentary">documentary</option>
        <option value="Comedy">comedy</option>
        <option value="Horror">horror</option>
        <option value="Crime">crime</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Drama">Drama</option>
        <option value="Family">Family</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    </label>
    <label className={S.input}>
      overview
      <input
        type="text"
        name="overview"
        value={movie.overview}
        placeholder="Overview here"
        onChange={changeSelectedMovie}
      />
    </label>
    <label className={S.input}>
      runtime
      <input
        type="number"
        name="runtime"
        value={movie.runtime}
        placeholder="Runtime here"
        onChange={changeSelectedMovie}
      />
    </label>
    <div className={S.buttons}>
      <button className={S.resetBtn} onClick={resetMovieModal}>
        Reset
      </button>
      <button className={S.submitBtn} onClick={submitMovieModal}>
        Submit
      </button>
    </div>
  </div>
);

AddEditMovieModal.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  closeMovieModal: PropTypes.func.isRequired,
  submitMovieModal: PropTypes.func.isRequired,
  changeSelectedMovie: PropTypes.func.isRequired,
  resetMovieModal: PropTypes.func.isRequired,
};

AddEditMovieModal.defaultProps = {
  movie: {
    title: '',
    release_date: new Date().toISOString().split('T')[0],
    poster_path: '',
    genre: 'Documentary',
    overview: '',
    runtime: 0,
  },
}

const mapStateToProps = ({ movieSearchPage }) => ({
  title: movieSearchPage.modalType,
  movie: movieSearchPage.selectedMovie,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeMovieModal: closeMovieModal(dispatch),
  submitMovieModal: submitMovieModal(dispatch, ownProps),
  resetMovieModal: resetMovieModal(dispatch, ownProps),
  changeSelectedMovie: changeSelectedMovie(dispatch, ownProps),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMovieModal);
