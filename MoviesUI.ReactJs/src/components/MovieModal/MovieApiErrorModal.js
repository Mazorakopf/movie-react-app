import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeMovieModal } from '../../pages/MovieSearch/action.creator';
import S from './style.module.scss';

const MovieApiErrorModal = ({ errorMessage, closeMovieModal }) => (
  <div className={S.modal}>
    <button className={S.close} onClick={closeMovieModal} />
    <span>{errorMessage}</span>
    <label>Please try refreshing the page.</label>
    <div className={S.buttons}>
      <button className={S.submitBtn} onClick={closeMovieModal}>
        confirm
      </button>
    </div>
  </div>
);

MovieApiErrorModal.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  closeMovieModal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movieSearchPage }) => ({
    errorMessage: movieSearchPage.errorMessage,
  });

const mapDispatchToProps = (dispatch) => ({
  closeMovieModal: closeMovieModal(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieApiErrorModal);