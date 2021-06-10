import { MovieModalType } from '../../components/MovieModal/util';
import * as MovieApi from '../../api/movie.api';

export const ActionTypes = {
  GET_MOVIES: 'GET_MOVIES',
  ADD_MOVIE: 'ADD_MOVIE',
  EDIT_MOVIE: 'EDIT_MOVIE',
  DELETE_MOVIE: 'DELETE_MOVIE',
  OPEN_MOVIE_DETAILS: 'OPEN_MOVIE_DETAILS',
  OPEN_MOVIE_MODAL: 'OPEN_MOVIE_MODAL',
  OPEN_MOVIE_SEARCH_FORM: 'OPEN_MOVIE_SEARCH_FORM',
  RESET_MOVIE_MODAL: 'RESET_MOVIE_MODAL',
  CLOSE_MOVIE_MODAL: 'CLOSE_MOVIE_MODAL',
  CHANGE_MOVIE_INPUT: 'CHANGE_MOVIE_INPUT',
};

export const fetchAllMovies = (dispatch) => () =>
  dispatch(async (dispatch) =>
    dispatch({
      type: ActionTypes.GET_MOVIES,
      payload: await MovieApi.getAllByQuery(),
    })
  );

export const sortMovies = (dispatch) => (event) =>
  dispatch(async (dispatch) =>
    dispatch({
      type: ActionTypes.GET_MOVIES,
      payload: await MovieApi.getAllByQuery({ sortBy: event.target.value }),
    })
  );

export const filterMoviesByGenre = (dispatch) => (genre) => () =>
  dispatch(async (dispatch) =>
    dispatch({
      type: ActionTypes.GET_MOVIES,
      payload: await MovieApi.getAllByQuery({ filter: genre }),
    })
  );

export const openMovieDetails = (dispatch, { movie }) => () =>
  dispatch({ type: ActionTypes.OPEN_MOVIE_DETAILS, payload: movie });

export const openMovieModal = (dispatch, { movie }, modalType) => () =>
  dispatch({
    type: ActionTypes.OPEN_MOVIE_MODAL,
    payload: { movie, modalType },
  });

export const openMovieSearchForm = (dispatch) => () =>
  dispatch({ type: ActionTypes.OPEN_MOVIE_SEARCH_FORM });

const addMovie = (movie) => async (dispatch) => {
  return dispatch({
    type: ActionTypes.ADD_MOVIE,
    payload: await MovieApi.create(movie),
  });
};

const editMovie = (movie) => async (dispatch) => {
  return dispatch({
    type: ActionTypes.EDIT_MOVIE,
    payload: await MovieApi.update(movie),
  });
};

const deleteMovie = (id) => async (dispatch) => {
  if (await MovieApi.remove(id))
    return dispatch({ type: ActionTypes.DELETE_MOVIE });
};

export const submitMovieModal = (dispatch, { modalType, selectedMovie }) => () => {
  if (modalType === MovieModalType.ADD)
    return dispatch(addMovie(selectedMovie));
  if (modalType === MovieModalType.EDIT)
    return dispatch(editMovie(selectedMovie));
  if (modalType === MovieModalType.DELETE)
    return dispatch(deleteMovie(selectedMovie.id));
};

export const resetMovieModal = (dispatch, { selectedMovie }) => () =>
  dispatch(async (dispatch) => {
    if (!selectedMovie?.id) return dispatch({ type: ActionTypes.RESET_MOVIE_MODAL });
    return dispatch({
      type: ActionTypes.RESET_MOVIE_MODAL,
      payload: await MovieApi.getById(selectedMovie.id),
    });
  });

export const closeMovieModal = (dispatch) => () =>
  dispatch({ type: ActionTypes.CLOSE_MOVIE_MODAL });

export const changeSelectedMovie = (dispatch, { selectedMovie }) => (event) =>
  dispatch({
    type: ActionTypes.CHANGE_MOVIE_INPUT,
    payload: {
      ...selectedMovie,
      [event.target.name]: event.target.value,
    },
  });
