import React, { Suspense } from 'react';
import MovieList from '../../components/MovieList';
import MovieSearchForm from '../../components/MovieSearchForm';
import * as MovieService from '../../core/MovieService';

const MovieModal = React.lazy(() => import('../../components/MovieModal'));

export default class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MovieService.getMoviePreviews(),
      selectedMovie: {},
      addWindow: false,
      editWindow: false, 
      deleteWindow: false,  
    };

    this.refreshMovieList = this.refreshMovieList.bind(this);
    this.openModalWindow = this.openModalWindow.bind(this);
    this.handleSubmitAddWindow = this.handleSubmitAddWindow.bind(this);
    this.handleSubmitEditWindow = this.handleSubmitEditWindow.bind(this);
  }

  refreshMovieList() {
    this.setState({ movies: MovieService.getMoviePreviews() });
  }

  openModalWindow(type, isOpen, selectedMovie = {}) {
    this.setState(() => {
      if (type === 'addWindow') {
        return { addWindow: isOpen };
      } else if (type === 'editWindow') {
        return { selectedMovie, editWindow: isOpen };
      } else if (type === 'deleteWindow') {
        return { selectedMovie, deleteWindow: isOpen };
      }
    });
  }

  handleSubmitAddWindow(movie) {
    MovieService.addMovie(movie);
    this.refreshMovieList();
  }

  handleSubmitEditWindow(movie) {
    this.refreshMovieList();
  }

  handleSubmitDeleteWindow(movie) {
    MovieService.deleteMovie(movie);
    this.refreshMovieList();
  }

  render() {
    return (
      <>
        <MovieSearchForm
          openAddWindow={() => this.openModalWindow('addWindow', true)}
        />
        <MovieList
          openEditWindow={(movie) => this.openModalWindow('editWindow', true, movie)}
          openDeleteWindow={(movie) => this.openModalWindow('deleteWindow', true, movie)}
          moviePreviews={this.state.movies}
        />
        <Suspense fallback={<div>Loading...</div>}>
          {this.state.addWindow && (
            <MovieModal
              type="add"
              submit={(movie) => this.handleSubmitAddWindow(movie)}
              close={() => this.openModalWindow('addWindow', false)}
            />
          )}
          {this.state.editWindow && (
            <MovieModal
              type="edit"
              selectedMovie={this.state.selectedMovie}
              submit={(movie) => this.handleSubmitEditWindow(movie)}
              close={() => this.openModalWindow('editWindow', false)}
            />
          )}
          {this.state.deleteWindow && (
            <MovieModal
              type="delete"
              selectedMovie={this.state.selectedMovie}
              submit={(movie) => this.handleSubmitDeleteWindow(movie)}
              close={() => this.openModalWindow('deleteWindow', false)}
            />
          )}
        </Suspense>
      </>
    );
  }
}
