import React from 'react';
import UserList from './components/UserList';
import ReactImg from './assets/images/reactjs-logo.png';
import ClipboardIcon from './assets/svg/clipboard.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="header">
          <ClipboardIcon />
          {React.createElement('h1', null, 'List of users')}
        </div>
        <UserList />
        <img src={ReactImg} alt="React application image" />
      </div>
    );
  }
}
