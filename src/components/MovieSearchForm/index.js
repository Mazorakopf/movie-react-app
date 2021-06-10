import React from 'react';
import { MovieModalType } from '../MovieModal/util';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openMovieModal } from '../../pages/MovieSearch/action.creator';
import S from './style.module.scss';

const defaultMovie = {
  title: '',
  release_date: new Date().toISOString().split('T')[0],
  poster_path: '',
  genre: 'Documentary',
  overview: '',
  runtime: 0,
};

const MovieSearchForm = ({ openMovieModal }) => (
  <>
    <div className={S.mainBlock}>
      <button className={S.addMovieBtn} onClick={() => openMovieModal(MovieModalType.ADD, defaultMovie)}>
        +add movie
      </button>
      <div className={S.searchBlock}>
        <h1 className={S.title}>Find your movie</h1>
        <form className={S.form}>
          <input 
            className={S.searchInput}
            type="text"
            name="search"
            placeholder="What do you want to watch?"
          />
          <input className={S.submitBtn} type="submit" value="Search" />
        </form>
      </div>
    </div>
  </>
);


MovieSearchForm.propTypes = {
  openMovieModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  openMovieModal: openMovieModal(dispatch),
});

export default connect(null, mapDispatchToProps)(MovieSearchForm);
