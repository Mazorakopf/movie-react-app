import React, { Suspense, useEffect } from 'react';
import MovieList from '../../components/MovieList';
import MovieSearchForm from '../../components/MovieSearchForm';
import Loading from '../../shared/Loading';
import { connect } from 'react-redux';
import { fetchAllMovies } from './action.creator';

const MovieModal = React.lazy(() => import('../../components/MovieModal'));
const MovieDetails = React.lazy(() => import('../../components/MovieDetails'));

const MovieSearch = ({ loading, movieDetails, movieModal, modalType, fetchAllMovies }) => {
  useEffect(() => {
    if (modalType === '') fetchAllMovies();
  }, [modalType]);

  return (
    <>
      {movieDetails 
        ? <Suspense fallback={<Loading />}><MovieDetails /></Suspense> 
        : <MovieSearchForm />}
      {loading 
        ? <Loading /> 
        : <MovieList />}
      <Suspense fallback={<Loading />}>
        {movieModal && <MovieModal />}
      </Suspense>
    </>
  );
};

const mapStateToProps = ({ movieSearchPage }) => ({
  loading: movieSearchPage.loading,
  movieDetails: movieSearchPage.movieDetails,
  movieModal: movieSearchPage.movieModal,
  modalType: movieSearchPage.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: fetchAllMovies(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
