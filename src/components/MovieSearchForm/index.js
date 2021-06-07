import React from 'react';
import { MovieModalType } from '../MovieModal/util';
import PropTypes from 'prop-types';
import S from './style.module.scss';

const MovieSearchForm = ({ openMovieModal }) => (
  <>
    <div className={S.mainBlock}>
      <button className={S.addMovieBtn} onClick={() => openMovieModal(MovieModalType.ADD)}>
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

export default MovieSearchForm;
