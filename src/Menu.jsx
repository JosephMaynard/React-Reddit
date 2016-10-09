import React, { Component } from 'react';
import './Menu.css';
import SubredditGroup from './SubredditGroup';
import CloseBtn from './CloseBtn.svg';

class Menu extends Component {

  render() {
    return (
      <div className="Menu">
        <img src={CloseBtn} alt="Close" className="closeBtn" onClick={this.props.toggleMenu} />
        {this.props.subreddits.map((result, index) => (
          <SubredditGroup
            key={`subredditGroup${index}`}
            subredditIndex={index}
            subreddits={Object.keys(result.subreddits)}
            subredditsObject={result}
            changeColor={this.props.changeColor}
            addSubreddit={this.props.addSubreddit}
            deleteSubreddit={this.props.deleteSubreddit}
          />
        ))}
      </div>
      );
  }
}

Menu.propTypes = {
  subreddits: React.PropTypes.array.isRequired,
  changeSubreddits: React.PropTypes.func.isRequired,
  addSubreddit: React.PropTypes.func.isRequired,
  deleteSubreddit: React.PropTypes.func.isRequired,
  changeColor: React.PropTypes.func.isRequired,
  toggleMenu: React.PropTypes.func.isRequired,
};

export default Menu;
