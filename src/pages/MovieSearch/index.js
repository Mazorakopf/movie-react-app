import React from 'react';
import MovieList from '../../components/MovieList';
import MovieSearchForm from '../../components/MovieSearchForm';
import * as MovieService from '../../core/MovieService';

export default () => (
  <>
    <MovieSearchForm />
    <MovieList moviePreviews={MovieService.getMoviePreviews()}/>
  </>
);
