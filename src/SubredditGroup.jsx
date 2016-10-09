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
        color={props.subredditsObject.subreddits[result].color}
        subredditIndex={props.subredditIndex}
        deleteSubreddit={props.deleteSubreddit}
        changeColor={props.changeColor}
      />)
    )}
    </ReactCSSTransitionGroup>
    <h3>Add Subreddit:</h3>
    <AddSubreddit
      subredditIndex={props.subredditIndex}
      addSubreddit={props.addSubreddit}
    />
  </div>
);

SubredditGroup.propTypes = {
  subreddits: React.PropTypes.array.isRequired,
  subredditsObject: React.PropTypes.object.isRequired,
  subredditIndex: React.PropTypes.number.isRequired,
  addSubreddit: React.PropTypes.func.isRequired,
  deleteSubreddit: React.PropTypes.func.isRequired,
  changeColor: React.PropTypes.func.isRequired,
};

export default SubredditGroup;
