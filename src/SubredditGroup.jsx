import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AddSubreddit from './AddSubreddit';
import Subreddit from './Subreddit';
import './SubredditGroup.css';

const SubredditGroup = (props) => (
  <div className="SubredditGroup">
    <h2>Show these Subreddits:</h2>
    <ReactCSSTransitionGroup
      transitionName="Subreddit-slide"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
    {props.subreddits.map((result, index) => (
      <Subreddit
        key={result}
        arrayPosition={index}
        name={result}
        removeSubreddit={props.removeSubreddit}
      />)
    )}
    </ReactCSSTransitionGroup>
    <h3>Add Subreddit:</h3>
    <AddSubreddit addSubreddit={props.addSubreddit} />
  </div>
);

SubredditGroup.propTypes = {
  subreddits: React.PropTypes.array.isRequired,
  removeSubreddit: React.PropTypes.func.isRequired,
  addSubreddit: React.PropTypes.func.isRequired,
};

export default SubredditGroup;
