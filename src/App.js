import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import Menu from './Menu';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.changeSubreddits = this.changeSubreddits.bind(this);

    this.state = {
      subreddits: ['javascript', 'programming', 'ProgrammerHumor', 'webdev'],
    };
  }

  changeSubreddits(subreddits) {
    this.setState({
      subreddits,
    });
    console.log(this.children);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reddit</h2>
        </div>
        <PostList subreddits={this.state.subreddits} />
        <Menu subreddits={this.state.subreddits} changeSubreddits={this.changeSubreddits} />

      </div>
    );
  }
}

export default App;
