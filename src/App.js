import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import Menu from './Menu';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.changeSubreddits = this.changeSubreddits.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      subreddits: ['javascript', 'programming', 'ProgrammerHumor', 'webdev'],
      showMenu: false,
    };
  }

  changeSubreddits(subreddits) {
    this.setState({
      subreddits,
    });
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reddit</h2>
        </div>
        <PostList subreddits={this.state.subreddits} />
        {this.state.showMenu 
          ? <Menu subreddits={this.state.subreddits} changeSubreddits={this.changeSubreddits} toggleMenu={this.toggleMenu} />
          : null}

      </div>
    );
  }
}

export default App;
