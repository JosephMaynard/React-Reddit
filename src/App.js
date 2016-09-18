import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import PostList from './PostList';
import Header from './Header';
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
    console.log('toggleMenu');
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <div className="App">
        <Header showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
        <PostList subreddits={this.state.subreddits} />
        <ReactCSSTransitionGroup
          transitionName="Menu-slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.showMenu
            ? <Menu
              subreddits={this.state.subreddits}
              changeSubreddits={this.changeSubreddits}
              toggleMenu={this.toggleMenu}
            />
            : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
