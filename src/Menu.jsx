import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AddSubreddit from './AddSubreddit';
import Subreddit from './Subreddit';
import './Menu.css';
import CloseBtn from './CloseBtn.svg';

class Menu extends Component {

  constructor(props, context) {
    super(props, context);
    this.addSubreddit = this.addSubreddit.bind(this);
    this.removeSubreddit = this.removeSubreddit.bind(this);
  }

  addSubreddit(subredddit) {
    this.props.changeSubreddits(this.props.subreddits.concat(subredddit));
  }

  removeSubreddit(arrayPosition) {
    const newArray = Array.from(this.props.subreddits);
    newArray.splice(arrayPosition, 1);
    this.props.changeSubreddits(newArray);
  }

  render() {
    console.log(this.props);
    return (
      <div className="Menu">
        <img src={CloseBtn} className="closeBtn" onClick={this.props.toggleMenu} />
        <AddSubreddit addSubreddit={this.addSubreddit} />
        <ReactCSSTransitionGroup
          transitionName="Subreddit-slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
        {this.props.subreddits.map((result, index) => (
          <Subreddit
            key={index}
            arrayPosition={index}
            name={result}
            removeSubreddit={this.removeSubreddit}
          />)
        )}
        </ReactCSSTransitionGroup>
      </div>
      );
  }
}

Menu.propTypes = {
  subreddits: React.PropTypes.array.isRequired,
  changeSubreddits: React.PropTypes.func.isRequired,
  toggleMenu: React.PropTypes.func.isRequired,
};

export default Menu;
