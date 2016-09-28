import React, { Component } from 'react';
import './Menu.css';
import SubredditGroup from './SubredditGroup';
import CloseBtn from './CloseBtn.svg';

class Menu extends Component {

  constructor(props, context) {
    super(props, context);
    this.addSubreddit = this.addSubreddit.bind(this);
    this.removeSubreddit = this.removeSubreddit.bind(this);
  }

  addSubreddit(subredddit) {
    if (this.props.subreddits.indexOf(subredddit) === -1) {
      this.props.changeSubreddits(this.props.subreddits.concat(subredddit));
    }
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
        <img src={CloseBtn} alt="Close" className="closeBtn" onClick={this.props.toggleMenu} />
        <SubredditGroup
          subreddits={this.props.subreddits}
          removeSubreddit={this.removeSubreddit}
          addSubreddit={this.addSubreddit}
        />
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
