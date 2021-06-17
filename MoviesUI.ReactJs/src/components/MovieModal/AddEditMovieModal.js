import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import { MovieFormSchema } from './util';
import { connect } from 'react-redux';
import { closeMovieModal, submitMovieModal } from '../../pages/MovieSearch/action.creator';
import S from './style.module.scss';

const AddEditMovieModal = ({
  title,
  movie,
  closeMovieModal,
  submitMovieModal,
}) => (
  <div className={S.modal}>
    <button className={S.close} onClick={closeMovieModal} />
    <span>{title} movie</span>
    <Formik initialValues={movie} onSubmit={submitMovieModal} validationSchema={MovieFormSchema} >
      {({ isSubmitting }) => (
        <Form>
          <label>title</label>
          <Field
            type="text"
            name="title"
            placeholder="Movie title here"
            className={S.input}
          />
          <ErrorMessage name="title" component="span" className={S.errorMessage} />
          <label>release date</label>
          <Field
            type="date"
            name="release_date"
            placeholder="Select Date"
            className={S.input}
          />
          <ErrorMessage name="release_date" component="span" className={S.errorMessage} />
          <label>movie url</label>
          <Field
            type="text"
            name="poster_path"
            placeholder="Movie URL here"
            className={S.input}
          />
          <ErrorMessage name="poster_path" component="span" className={S.errorMessage} />
          <label>genre</label>
          <Field
            as="select"
            name="genre"
            placeholder="Select Genre"
            className={S.input}
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
          </Field>
          <ErrorMessage name="genre" />
          <label>overview</label>
          <Field
            type="text"
            name="overview"
            placeholder="Overview here"
            className={S.input}
          />
          <ErrorMessage name="overview" component="span" className={S.errorMessage} />
          <label>runtime</label>
          <Field
            type="number"
            name="runtime"
            placeholder="Runtime here"
            className={S.input}
          />
          <ErrorMessage name="runtime" component="span" className={S.errorMessage} />
          <div className={S.buttons}>
            <button type="reset" className={S.resetBtn}>
              Reset
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={S.submitBtn}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

AddEditMovieModal.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  closeMovieModal: PropTypes.func.isRequired,
  submitMovieModal: PropTypes.func.isRequired,
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
};

const mapStateToProps = ({ movieSearchPage }) => ({
  title: movieSearchPage.modalType,
  movie: movieSearchPage.selectedMovie,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeMovieModal: closeMovieModal(dispatch),
  submitMovieModal: (values, { setSubmitting }) => {
    submitMovieModal(dispatch, {...ownProps, selectedMovie: values }),
    setSubmitting(false);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMovieModal);
