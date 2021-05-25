import React, { useState, useEffect, useCallback } from 'react';
import styles from './style.module.scss';

const DeleteMovieModal = React.lazy(() => import('./DeleteMovieModal'));
const AddEditMovieModal = React.lazy(() => import('./AddEditMovieModal.js'));

const empty = {};

export default ({ type, submit, close, selectedMovie = empty }) => {
  const [movie, setMovie] = useState(selectedMovie);

  useEffect(() => setMovie(selectedMovie), [selectedMovie]);

  const handleChange = (event) =>
    setMovie({ ...movie, [event.target.name]: event.target.value });

  const handleReset = () =>
    Array.from(document.querySelectorAll(`.${styles.modal} input`)).forEach(
      (input) => (input.value = '')
    );

  const handleSubmit = () => {
    submit(movie);
    close();
  };

  if (type === 'add' || type === 'edit') {
    return (
      <AddEditMovieModal
        title={type}
        movie={movie}
        close={close}
        change={handleChange}
        reset={handleReset}
        submit={handleSubmit}
      />
    );
  } else if (type === 'delete') {
    return <DeleteMovieModal close={close} submit={handleSubmit} />;
  }
};
