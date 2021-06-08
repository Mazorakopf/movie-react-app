import React from 'react';
import { MovieModalType } from './util';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../pages/MovieSearch/action';

const DeleteMovieModal = React.lazy(() => import('./DeleteMovieModal'));
const AddEditMovieModal = React.lazy(() => import('./AddEditMovieModal.js'));

const MovieModal = ({
  modalType,
  selectedMovie,
  submitMovieModal,
  closeMovieModal,
  onInputChanged,
  resetMovieModal,
}) => {

  if (modalType === MovieModalType.ADD || modalType === MovieModalType.EDIT)
    return (
      <AddEditMovieModal
        {...{ title: modalType, movie: selectedMovie, closeMovieModal, onInputChanged, resetMovieModal, submitMovieModal } }
      />
    );

  if (modalType === MovieModalType.DELETE)
    return (
      <DeleteMovieModal
        {...{ movie: selectedMovie, closeMovieModal, submitMovieModal }}
      />
    );

  return null;
};

MovieModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  selectedMovie: PropTypes.object,
  submitMovieModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, state) => ({
  closeMovieModal: Actions.closeMovieModal(dispatch),
  submitMovieModal: Actions.submitMovieModal(dispatch, state),
  resetMovieModal: Actions.resetMovieModal(dispatch, state),
  onInputChanged: Actions.onInputChanged(dispatch, state),
});

export default connect(null, mapDispatchToProps)(MovieModal);
