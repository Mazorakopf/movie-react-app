import React from 'react';
import S from './style.module.scss';

const MovieNavBar = ({ sortMovies, filterMoviesByGenre }) => (
  <ul className={S.navBar}>
    <li className={S.left}><a onClick={filterMoviesByGenre()}>all</a></li>
    <li className={S.left}><a onClick={filterMoviesByGenre('Documentary')}>documentary</a></li>
    <li className={S.left}><a onClick={filterMoviesByGenre('Comedy')}>comedy</a></li>
    <li className={S.left}><a onClick={filterMoviesByGenre('Horror')}>horror</a></li>
    <li className={S.left}><a onClick={filterMoviesByGenre('Crime')}>crime</a></li>
    <li className={S.right}>
      <span>sort by</span>
      <select name="sortOptions" onChange={sortMovies}>
        <option></option>
        <option value="release_date">release data</option>
        <option value="rating">rating</option>
      </select>
    </li>
  </ul>
);

MovieNavBar.propTypes = {
  sortMovies: PropTypes.func.isRequired,
  filterMoviesByGenre: PropTypes.func.isRequired,
};

export default MovieNavBar;