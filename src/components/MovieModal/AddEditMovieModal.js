import React from 'react';
import PropTypes from 'prop-types';
import S from './style.module.scss';

const AddEditMovieModal = ({
  title,
  movie,
  closeMovieModal,
  submitMovieModal,
  onInputChanged,
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
        onChange={onInputChanged}
      />
    </label>
    <label className={S.input}>
      release date
      <input
        type="date"
        name="release_date"
        value={movie.release_date}
        placeholder="Select Date"
        onChange={onInputChanged}
      />
    </label>
    <label className={S.input}>
      movie url
      <input
        type="url"
        name="poster_path"
        value={movie.poster_path}
        placeholder="Movie URL here"
        onChange={onInputChanged}
      />
    </label>
    <label className={S.input}>
      genre
      <select
        name="genre"
        value={movie.genre}
        placeholder="Select Genre"
        onChange={onInputChanged}
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
        onChange={onInputChanged}
      />
    </label>
    <label className={S.input}>
      runtime
      <input
        type="number"
        name="runtime"
        value={movie.runtime}
        placeholder="Runtime here"
        onChange={onInputChanged}
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
  onInputChanged: PropTypes.func.isRequired,
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

export default AddEditMovieModal;
