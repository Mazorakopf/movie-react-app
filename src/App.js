import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {React.createElement('h1', null, 'List of users')}
        <UserList />
      </div>
    );
  }
}

class UserList extends React.PureComponent {
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

const User = ({ firstName, lastName }) => <li>{`${firstName} ${lastName}`}</li>;
