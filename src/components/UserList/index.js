import React from 'react';
import User from '../User';
import './index.css';

export default class UserList extends React.PureComponent {
  render() {
    return (
      <ul>
        <User firstName="Uladzislau" lastName="Kleshchanka" />
        <User firstName="Ivan" lastName="Ivanov" />
        <User firstName="Peter" lastName="Petrov" />
      </ul>
    );
  }
}
