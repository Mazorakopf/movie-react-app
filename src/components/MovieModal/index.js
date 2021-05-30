import React, { useState, useEffect } from 'react';
import { MovieModalType } from './util';
import PropTypes from 'prop-types';

const DeleteMovieModal = React.lazy(() => import('./DeleteMovieModal'));
const AddEditMovieModal = React.lazy(() => import('./AddEditMovieModal.js'));

const MovieModal = ({ type, selectedMovie, submitMovieModal, closeMovieModal }) => {
  const [movie, setMovie] = useState(selectedMovie);

  useEffect(() => setMovie(selectedMovie), [selectedMovie]);

  const handleSubmit = () => {
    submitMovieModal(movie);
    closeMovieModal();
  };

  if (type === MovieModalType.ADD || type === MovieModalType.EDIT) return (
    <AddEditMovieModal { ...{ title: type, movie, closeMovieModal, submitMovieModal: handleSubmit } }
      onInputChanged={(event) => setMovie({ ...movie, [event.target.name]: event.target.value })}
      resetMovieModal={() => setMovie(selectedMovie)}
    />
  );
  
  if (type === MovieModalType.DELETE) return (
    <DeleteMovieModal { ...{ closeMovieModal, submitMovieModal: handleSubmit } } />
  );
  
  return null;
};

MovieModal.propTypes = {
  type: PropTypes.string.isRequired,
  selectedMovie: PropTypes.object,
  submitMovieModal: PropTypes.func.isRequired,
  closeMovieModal: PropTypes.func.isRequired,
};

MovieModal.defaultProps = {
  selectedMovie: {
    title: '',
    releaseDate: new Date().toISOString(),
    imageUrl: '',
    genre: 'Documentary',
    overview: '',
    runtime: 0,
  }
};

export default MovieModal;
