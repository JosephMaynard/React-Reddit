import React from 'react';
import './Subreddit.css';

const Subreddit = (props) => (
  <div className="Subreddit">
    <p>{props.arrayPosition} /r/{props.name}</p>
    <button onClick={() => props.removeSubreddit(props.arrayPosition)}>-</button>
  </div>
);

Subreddit.propTypes = {
  arrayPosition: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  removeSubreddit: React.PropTypes.func.isRequired,
};

export default Subreddit;
