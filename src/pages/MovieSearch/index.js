import React, { Suspense, useReducer, useState } from 'react';
import MovieList from '../../components/MovieList';
import MovieSearchForm from '../../components/MovieSearchForm';
import * as MovieService from '../../core/MovieService';

const MovieModal = React.lazy(() => import('../../components/MovieModal'));
const MovieDetails = React.lazy(() => import('../../components/MovieDetails'));

const reducer = (state, action) => {
  if (action.type === 'add') {
    return { ...action, submit: (movie) => MovieService.addMovie(movie) };
  } else if (action.type === 'edit') {
    return { ...action, submit: (movie) => MovieService.updateMovie(movie) };
  } else if (action.type === 'delete') {
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
      {state.selectedMovie && !state.active ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MovieDetails {...state.selectedMovie} clickSearch={() => dispatch({})}/>
        </Suspense>) 
        : (<MovieSearchForm open={(type) => dispatch({ type, active: true })} />
      )}
      <MovieList
        open={(type, selectedMovie) =>
          dispatch({ type, active: true, selectedMovie })
        }
        clickCard={(selectedMovie) => dispatch({ selectedMovie })}
        moviePreviews={movies}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {state.active && (
          <MovieModal
            type={state.type}
            selectedMovie={state.selectedMovie}
            submit={state.submit}
            close={() => dispatch({ type: state.type, active: false })}
          />
        )}
      </Suspense>
    </>
  );
};
