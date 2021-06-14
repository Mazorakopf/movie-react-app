import React from 'react';
import { MovieModalType } from './util';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DeleteMovieModal = React.lazy(() => import('./DeleteMovieModal'));
const AddEditMovieModal = React.lazy(() => import('./AddEditMovieModal.js'));

const MovieModal = ({ modalType, selectedMovie }) => {
  switch(modalType) {
    case MovieModalType.ADD:
    case MovieModalType.EDIT:
      return <AddEditMovieModal { ...{ modalType, selectedMovie } }/>;
    case MovieModalType.DELETE: 
      return <DeleteMovieModal { ...{ modalType, selectedMovie } }/>;
    default:
      return null;
  }
};

MovieModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  selectedMovie: PropTypes.object,
};

const mapStateToProps = ({ movieSearchPage }) => ({
  modalType: movieSearchPage.modalType,
  selectedMovie: movieSearchPage.selectedMovie,
});

export default connect(mapStateToProps)(MovieModal);
