import React from 'react';
import styles from './style.module.scss';

export default (props) => (
  <div className={styles.modal}>
    <button className={styles.close} onClick={props.handleCloseModal} />
    <span>delete movie</span>
    <label>Are you sure you want to delete this movie?</label>
    <div className={styles.buttons}>
      <button className={styles.submitBtn} onClick={props.handleSubmit}>
        confirm
      </button>
    </div>
  </div>
);
