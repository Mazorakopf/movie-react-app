import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeMovieModal, submitMovieModal } from '../../pages/MovieSearch/action.creator';
import S from './style.module.scss';

const DeleteMovieModal = ({ closeMovieModal, submitMovieModal }) => (
  <div className={S.modal}>
    <button className={S.close} onClick={closeMovieModal} />
    <span>delete movie</span>
    <label>Are you sure you want to delete this movie?</label>
    <div className={S.buttons}>
      <button className={S.submitBtn} onClick={submitMovieModal}>
        confirm
      </button>
    </div>
  </div>
);

DeleteMovieModal.propTypes = {
  closeMovieModal: PropTypes.func.isRequired,
  submitMovieModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeMovieModal: closeMovieModal(dispatch),
  submitMovieModal: submitMovieModal(dispatch, ownProps),
});

export default connect(null, mapDispatchToProps)(DeleteMovieModal);
