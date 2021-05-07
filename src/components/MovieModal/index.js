import React from 'react';
import styles from './style.module.scss';

const DeleteMovieModal = React.lazy(() => import('./DeleteMovieModal'));
const AddEditMovieModal = React.lazy(() => import('./AddEditMovieModal.js'));

export default class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: this.props.selectedMovie ?? {} };
    console.log(this.state);

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    Array.from(document.querySelectorAll(`.${styles.modal} input`)).forEach(
      (input) => (input.value = '')
    );

    this.setState({ movie: {} });
  }

  handleCloseModal() {
    this.props.close();
    this.handleReset();
  }

  handleChange(event) {
    this.state.movie[event.target.name] = event.target.value;
  }

  handleSubmit() {
    this.props.submit(this.state.movie);
    this.handleCloseModal();
  }

  componentDidMount() {
    Object.entries(this.state.movie).forEach(([key, value]) => {
      const el = document.querySelector(`.${styles.modal} input[name=${key}]`);
      if (el) el.value = value;
      const select =  document.querySelector(`.${styles.modal} select[name=${key}]`);
      if (select) select.value = value;
    });
  }

  render() {
    if (this.props.type === 'delete') {
      return (
        <DeleteMovieModal
          handleCloseModal={this.handleCloseModal}
          handleSubmit={this.handleSubmit}
        />
      );
    } else if (this.props.type === 'add' || this.props.type === 'edit') {
      return (
        <AddEditMovieModal
          title={this.props.type}
          handleCloseModal={this.handleCloseModal}
          handleChange={this.handleChange}
          handleReset={this.handleReset}
          handleSubmit={this.handleSubmit}
        />
      );
    } 
  }
}
