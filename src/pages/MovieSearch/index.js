import React, { Suspense, useEffect } from 'react';
import MovieList from '../../components/MovieList';
import MovieSearchForm from '../../components/MovieSearchForm';
import Loading from '../../shared/Loading';
import { connect } from 'react-redux';
import * as Actions from './action';

const MovieModal = React.lazy(() => import('../../components/MovieModal'));
const MovieDetails = React.lazy(() => import('../../components/MovieDetails'));

const MovieSearch = ({ 
  movies, loading, selectedMovie, 
  movieDetails, movieModal, 
  modalType, fetchAllMovies, 
  openMovieDetails, openMovieModal, 
  openMovieSearchForm, sortMovies, 
  filterMoviesByGenre
}) => {
  useEffect(() => {
    if (modalType === '') {
      fetchAllMovies();
    }
  }, [modalType]);

  return (
    <>
      {movieDetails ? 
        (<Suspense fallback={<Loading />}>
          <MovieDetails { ...{ movie: selectedMovie, openMovieSearchForm } } />
        </Suspense>) 
        : (<MovieSearchForm { ...{ openMovieModal } } />
      )}
      {loading ? <Loading /> : <MovieList { ...{ movies, openMovieModal, openMovieDetails, sortMovies, filterMoviesByGenre } } />}
      <Suspense fallback={<Loading />}>
        {movieModal && <MovieModal { ...{ modalType, selectedMovie } } />}
      </Suspense>
    </>
  );
};

const mapStateToProps = ({ movieSearchPage }) => ({
  movies: movieSearchPage.movies,
  loading: movieSearchPage.loading,
  selectedMovie: movieSearchPage.selectedMovie,
  movieDetails: movieSearchPage.movieDetails,
  movieModal: movieSearchPage.movieModal,
  modalType: movieSearchPage.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: Actions.fetchAllMovies(dispatch),
  openMovieDetails: Actions.openMovieDetails(dispatch),
  openMovieModal: Actions.openMovieModal(dispatch),
  openMovieSearchForm: Actions.openMovieSearchForm(dispatch),
  sortMovies: Actions.sortMovies(dispatch),
  filterMoviesByGenre: Actions.filterMoviesByGenre(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
