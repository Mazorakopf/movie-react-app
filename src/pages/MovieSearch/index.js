import React, { Suspense, useReducer, useState } from 'react';
import MovieList from '../../components/MovieList';
import MovieSearchForm from '../../components/MovieSearchForm';
import Loading from '../../shared/Loading';
import * as MovieService from '../../core/MovieService';
import { MovieModalType } from '../../components/MovieModal/util';

const MovieModal = React.lazy(() => import('../../components/MovieModal'));
const MovieDetails = React.lazy(() => import('../../components/MovieDetails'));

const reducer = (state, action) => {
  if (action.type === MovieModalType.ADD) {
    return { ...action, submit: (movie) => MovieService.addMovie(movie) };
  } else if (action.type === MovieModalType.EDIT) {
    return { ...action, submit: (movie) => MovieService.updateMovie(movie) };
  } else if (action.type === MovieModalType.DELETE) {
    return { ...action, submit: (movie) => MovieService.deleteMovie(movie) };
  } else {
    return { ...action };
  }
};

export default () => {
  const [movies] = useState(MovieService.getMoviePreviews());
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <>
      {state.selectedMovie && !state.active ? 
        (<Suspense fallback={<Loading />}>
          <MovieDetails movie={state.selectedMovie} openMovieSearchForm={() => dispatch({})} />
        </Suspense>) 
        : (<MovieSearchForm openMovieModal={(type) => dispatch({ type, active: true })} />
      )}
      <MovieList movies={movies}
        openMovieModal={(type, selectedMovie) => dispatch({ type, active: true, selectedMovie })}
        openMovieDetails={(selectedMovie) => dispatch({ selectedMovie })}
      />
      <Suspense fallback={<Loading />}>
        {state.active && (
          <MovieModal type={state.type} selectedMovie={state.selectedMovie} submitMovieModal={state.submit}
            closeMovieModal={() => dispatch({ type: state.type, active: false })}
          />
        )}
      </Suspense>
    </>
  );
};
