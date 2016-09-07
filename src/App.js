import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      subreddits: ['javascript', 'programming', 'ProgrammerHumor', 'webdev'],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reddit</h2>
        </div>
        <PostList subreddits={this.state.subreddits} />
      </div>
    );
  }
}

export default App;
