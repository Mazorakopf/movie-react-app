import React from 'react';
import styles from './style.module.scss';

export default (props) => (
  <div className={styles.modal}>
    <button className={styles.close} onClick={props.close} />
    <span>{props.title} movie</span>
    <label className={styles.input}>
      title
      <input
        type="text"
        name="title"
        value={props.movie.title ?? ''}
        placeholder="Movie title here"
        onChange={props.change}
      />
    </label>
    <label className={styles.input}>
      release date
      <input
        type="date"
        name="releaseDate"
        value={props.movie.releaseDate ?? ''}
        placeholder="Select Date"
        onChange={props.change}
      />
    </label>
    <label className={styles.input}>
      movie url
      <input
        type="url"
        name="imageUrl"
        value={props.movie.imageUrl ?? ''}
        placeholder="Movie URL here"
        onChange={props.change}
      />
    </label>
    <label className={styles.input}>
      genre
      <select
        name="genre"
        value={props.movie.genre ?? ''}
        placeholder="Select Genre"
        onChange={props.change}
      >
        <option value="Documentary">documentary</option>
        <option value="Comedy">comedy</option>
        <option value="Horror">horror</option>
        <option value="Crime">crime</option>
        <option value="Action & Adventure">action & adventure</option>
      </select>
    </label>
    <label className={styles.input}>
      overview
      <input
        type="text"
        name="overview"
        value={props.movie.overview ?? ''}
        placeholder="Overview here"
        onChange={props.change}
      />
    </label>
    <label className={styles.input}>
      runtime
      <input
        type="number"
        name="runtime"
        value={props.movie.runtime ?? ''}
        placeholder="Runtime here"
        onChange={props.change}
      />
    </label>
    <div className={styles.buttons}>
      <button className={styles.resetBtn} onClick={props.reset}>
        Reset
      </button>
      <button className={styles.submitBtn} onClick={props.submit}>
        Submit
      </button>
    </div>
  </div>
);
