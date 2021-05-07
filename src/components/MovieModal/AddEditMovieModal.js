import React from 'react';
import styles from './style.module.scss';

export default (props) => (
  <div className={styles.modal}>
    <button className={styles.close} onClick={props.handleCloseModal} />
    <span>{props.title} movie</span>
    <label className={styles.input}>
      title
      <input
        type="text"
        name="title"
        placeholder="Movie title here"
        onChange={props.handleChange}
      />
    </label>
    <label className={styles.input}>
      release date
      <input
        type="date"
        name="releaseDate"
        placeholder="Select Date"
        onChange={props.handleChange}
      />
    </label>
    <label className={styles.input}>
      movie url
      <input
        type="url"
        name="imageUrl"
        placeholder="Movie URL here"
        onChange={props.handleChange}
      />
    </label>
    <label className={styles.input}>
      genre
      <select
        name="genre"
        placeholder="Select Genre"
        onChange={props.handleChange}
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
        placeholder="Overview here"
        onChange={props.handleChange}
      />
    </label>
    <label className={styles.input}>
      runtime
      <input
        type="number"
        name="runtime"
        placeholder="Runtime here"
        onChange={props.handleChange}
      />
    </label>
    <div className={styles.buttons}>
      <button className={styles.resetBtn} onClick={props.handleReset}>
        Reset
      </button>
      <button className={styles.submitBtn} onClick={props.handleSubmit}>
        Submit
      </button>
    </div>
  </div>
);
