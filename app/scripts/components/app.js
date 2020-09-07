import React, { Component } from 'react';
import Hello from './hello';
import UserCard from './UserCard';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <UserCard />
      </div>
    );
  }
}

export default App;
