import { MovieModalType } from '../../components/MovieModal/util';
import { ActionTypes } from './action.creator';

const initialState = {
  movies: [],
  loading: true,
  selectedMovie: null,
  movieModal: false,
  movieDetails: null,
  modalType: '',
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIES:
      return { ...state, movies: action.payload, loading: false };
    case ActionTypes.ADD_MOVIE:
      return {
        ...state,
        selectedMovie: null,
        movieModal: false,
        modalType: '',
      };
    case ActionTypes.EDIT_MOVIE:
      return {
        ...state,
        selectedMovie: null,
        movieModal: false,
        modalType: '',
        movieDetails: state.movieDetails ? action.payload : null,
      };
    case ActionTypes.DELETE_MOVIE:
      return {
        ...state,
        selectedMovie: null,
        movieModal: false,
        modalType: '',
      };
    case ActionTypes.OPEN_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case ActionTypes.OPEN_MOVIE_MODAL:
      return {
        ...state,
        movieModal: true,
        selectedMovie: action.payload.movie,
        modalType: action.payload.modalType,
      };
    case ActionTypes.CLOSE_MOVIE_MODAL:
      return {
        ...state,
        movieModal: false,
        selectedMovie: null,
        modalType: '',
        errorMessage: '',
      };
    case ActionTypes.OPEN_MOVIE_SEARCH_FORM:
      return {
        ...state,
        movieDetails: null,
      };
    case ActionTypes.RESET_MOVIE_MODAL:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case ActionTypes.CHANGE_MOVIE_INPUT:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case ActionTypes.MOVIE_API_FAILURE:
      return {
        ...state,
        movieModal: true,
        modalType: MovieModalType.MOVIE_API_ERROR,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};
