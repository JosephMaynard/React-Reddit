import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import PostList from './PostList';
import Header from './Header';
import Menu from './Menu';
import Overlay from './Overlay';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.changeSubreddits = this.changeSubreddits.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.addSubreddit = this.addSubreddit.bind(this);
    this.deleteSubreddit = this.deleteSubreddit.bind(this);

    this.state = {
      subreddits: [
        {
          name: 'Programming',
          type: 'posts',
          subreddits: {
            javascript: {
              name: 'javascript',
              color: '#4caf50',
            },
            programming: {
              name: 'programming',
              color: '#9c27b0',
            },
            ProgrammerHumor: {
              name: 'ProgrammerHumor',
              color: '#2196f3',
            },
            webdev: {
              name: 'webdev',
              color: '#8bc34a',
            },
          },
        },
      ],
      showMenu: false,
      currentSubredditGroup: 0,
      colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
        '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b',
        '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b'],
    };
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem('subreddits');
    if (localStorageRef) {
      this.setState({
        subreddits: JSON.parse(localStorageRef),
      }) 
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('subreddits', JSON.stringify(nextState.subreddits));
  }

  changeSubreddits(subreddits) {
    const newSubreddits = subreddits;
    newSubreddits[0].subreddits = subreddits;
    this.setState({
      subreddits: newSubreddits,
    });
  }

  addSubreddit(subredditGroup, subreddit) {
    const subreddits = this.state.subreddits;
    subreddits[subredditGroup].subreddits[subreddit] = {
      name: subreddit,
      color: this.state.colors[Math.floor(Math.random() * this.state.colors.length)],
    };
    this.setState({
      subreddits,
    });
  }

  deleteSubreddit(subredditGroup, subreddit) {
    const subreddits = this.state.subreddits;
    delete subreddits[subredditGroup].subreddits[subreddit];
    this.setState({
      subreddits,
    });
  }

  changeColor(subredditGroup, subreddit, color) {
    const subreddits = this.state.subreddits;
    subreddits[subredditGroup].subreddits[subreddit].color = color;
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
        <Header
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
          subreddits={this.state.subreddits[this.state.currentSubredditGroup].subreddits}
        />
        <PostList
          subreddits={this.state.subreddits[this.state.currentSubredditGroup]}
        />
        <ReactCSSTransitionGroup
          transitionName="Overlay-fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.showMenu
            ? <Overlay toggleMenu={this.toggleMenu} />
            : null}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="Menu-slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.showMenu
            ? <Menu
              subreddits={this.state.subreddits}
              currentSubredditGroup={this.state.currentSubredditGroup}
              changeSubreddits={this.changeSubreddits}
              changeColor={this.changeColor}
              toggleMenu={this.toggleMenu}
              colors={this.state.colors}
              addSubreddit={this.addSubreddit}
              deleteSubreddit={this.deleteSubreddit}
            />
            : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
