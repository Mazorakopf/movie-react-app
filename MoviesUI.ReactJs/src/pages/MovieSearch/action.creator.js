import * as MovieApi from '../../api/movie.api';
import { MovieModalType } from '../../components/MovieModal/util';

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
  MOVIE_API_FAILURE: 'MOVIE_API_FAILURE'
};

const handleMovieApiError = (successAction) => async (dispatch) => {
  try {
    return dispatch(await successAction());
  } catch (err) {
    return dispatch({
      type: ActionTypes.MOVIE_API_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchAllMovies = (dispatch) => () =>
  dispatch(handleMovieApiError(
    async () => ({
      type: ActionTypes.GET_MOVIES, 
      payload: await MovieApi.getAllByQuery()
    })
  ));

export const sortMovies = (dispatch) => (event) =>
  dispatch(handleMovieApiError(
    async () => ({
      type: ActionTypes.GET_MOVIES, 
      payload: await MovieApi.getAllByQuery({ sortBy: event.target.value })
    })
  ));

export const filterMoviesByGenre = (dispatch) => (genre) => () =>
  dispatch(handleMovieApiError(
    async () => ({
      type: ActionTypes.GET_MOVIES, 
      payload: await MovieApi.getAllByQuery({ filter: genre })
    })
  ));

export const openMovieDetails = (dispatch, { movie }) => () =>
  dispatch({ type: ActionTypes.OPEN_MOVIE_DETAILS, payload: movie });

export const openMovieModal = (dispatch, { movie }, modalType) => () =>
  dispatch({
    type: ActionTypes.OPEN_MOVIE_MODAL,
    payload: { movie, modalType },
  });

export const openMovieSearchForm = (dispatch) => () =>
  dispatch({ type: ActionTypes.OPEN_MOVIE_SEARCH_FORM });

const addMovie = (movie) => async () => ({
  type: ActionTypes.ADD_MOVIE,
  payload: await MovieApi.create(movie),
});

const editMovie = (movie) => async () => ({
  type: ActionTypes.EDIT_MOVIE,
  payload: await MovieApi.update(movie),
});

const deleteMovie = (id) => async () => {
  if (await MovieApi.remove(id))
    return { type: ActionTypes.DELETE_MOVIE };
};

export const submitMovieModal = (dispatch, { modalType, selectedMovie }) => () => {
  if (modalType === MovieModalType.ADD)
    return dispatch(handleMovieApiError(addMovie(selectedMovie)));
  if (modalType === MovieModalType.EDIT)
    return dispatch(handleMovieApiError(editMovie(selectedMovie)));
  if (modalType === MovieModalType.DELETE)
    return dispatch(handleMovieApiError(deleteMovie(selectedMovie.id)));
};

export const resetMovieModal = (dispatch, { selectedMovie }) => () => {
  if (!selectedMovie?.id) return dispatch({ type: ActionTypes.RESET_MOVIE_MODAL });
  return dispatch(handleMovieApiError(
    async () => ({
      type: ActionTypes.RESET_MOVIE_MODAL, 
      payload: await MovieApi.getById(selectedMovie.id)
    })
  ));
};

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
