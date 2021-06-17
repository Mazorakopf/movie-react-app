import * as Yup from 'yup';

export const MovieModalType = {
    ADD: 'add',
    EDIT: 'edit',
    DELETE: 'delete',
    MOVIE_API_ERROR: 'movieApiError'
};

export const MovieFormSchema = Yup.object().shape({
    title: Yup.string()
      .required('Movie title is required!'),
    release_date: Yup.date()
      .required('Movie release date is required!'),
    poster_path: Yup.string()
      .url('Invalid url')
      .required('Movie poster date is required!'),
    genre: Yup.string()
      .required('Movie genre is required!'),
    overview: Yup.string()
      .required('Movie overview is required!'),
    runtime: Yup.number()
      .positive("Movie runtime must be positive!")
      .integer("Movie runtime must be integer value!")
      .required('Movie runtime is required!')
  });