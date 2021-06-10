import { MovieModalType } from '../../components/MovieModal/util';

const baseUrl = 'http://localhost:4000';

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

const toModel = (dto) => ({
  ...dto,
  genre: dto.genres[0],
  release_year: dto.release_date.split('-')[0],
});

const toDTO = (model) => ({
  id: model.id,
  title: model.title,
  tagline: model.tagline,
  vote_average: model.vote_average,
  vote_count: model.vote_count,
  release_date: model.release_date,
  poster_path: model.poster_path,
  overview: model.poster_path,
  budget: model.budget,
  revenue: model.revenue,
  genres: Array.from([model.genre]),
  runtime: Number(model.runtime),
});

const getMovies = (query) => async (dispatch) => {
  let url = `${baseUrl}/movies`;
  if (query?.sortBy) {
    url += `?sortBy=${query.sortBy}&sortOrder=desc`;
  }
  if (query?.filter) {
    url += `?searchBy=genres&filter=${query.filter}`;
  }
  const response = await fetch(url, { method: 'GET' });
  const result = await response.json();
  return dispatch({
    type: ActionTypes.GET_MOVIES,
    payload: result.data.map(toModel),
  });
};

const addMovie = (movie) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(toDTO(movie)),
  });
  const result = await response.json();
  return dispatch({ type: ActionTypes.ADD_MOVIE, payload: result });
};

const editMovie = (movie) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(toDTO(movie)),
  });
  const result = await response.json();
  return dispatch({ type: ActionTypes.EDIT_MOVIE, payload: result });
};

const deleteMovie = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/movies/${id}`, { method: 'DELETE' });
  if (response.ok) return dispatch({ type: ActionTypes.DELETE_MOVIE });
};

export const fetchAllMovies = (dispatch) => () => dispatch(getMovies());

export const openMovieDetails = (dispatch) => (selectedMovie) =>
  dispatch({ type: ActionTypes.OPEN_MOVIE_DETAILS, payload: selectedMovie });

export const openMovieModal = (dispatch) => (modalType, selectedMovie) =>
  dispatch({
    type: ActionTypes.OPEN_MOVIE_MODAL,
    modalType,
    payload: selectedMovie,
  });

export const openMovieSearchForm = (dispatch) => () =>
  dispatch({ type: ActionTypes.OPEN_MOVIE_SEARCH_FORM });

export const sortMovies = (dispatch) => (event) =>
  dispatch(getMovies({ sortBy: event.target.value }));

export const filterMoviesByGenre = (dispatch) => (genre) => () =>
  dispatch(getMovies({ filter: genre }));

export const submitMovieModal =
  (dispatch, { modalType, selectedMovie }) =>
  () => {
    if (modalType === MovieModalType.ADD)
      return dispatch(addMovie(selectedMovie));
    if (modalType === MovieModalType.EDIT)
      return dispatch(editMovie(selectedMovie));
    if (modalType === MovieModalType.DELETE)
      return dispatch(deleteMovie(selectedMovie.id));
  };

export const resetMovieModal = (dispatch, { selectedMovie }) => () =>
    dispatch(async (dispatch) => {
      if (!selectedMovie?.id) return dispatch({ type: 'RESET_MOVIE_MODAL' });
      const response = await fetch(`${baseUrl}/movies/${selectedMovie.id}`, {
        method: 'GET',
      });
      const result = await response.json();
      return dispatch({
        type: ActionTypes.RESET_MOVIE_MODAL,
        payload: toModel(result),
      });
    });

export const closeMovieModal = (dispatch) => (modalType) =>
  dispatch({ type: ActionTypes.CLOSE_MOVIE_MODAL, modalType });

export const changeSelectedMovie = (dispatch, { selectedMovie }) => (event) =>
    dispatch({
      type: ActionTypes.CHANGE_MOVIE_INPUT,
      payload: {
        ...selectedMovie,
        [event.target.name]: event.target.value,
      },
    });
