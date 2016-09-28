import React from 'react';
import CloseBtn from './CloseBtn.svg';
import './Subreddit.css';

const Subreddit = (props) => (
  <div className="Subreddit">
    <p>{props.name}</p>
    <img
      src={CloseBtn}
      className="RemoveSubreddit"
      alt="Remove Subreddit"
      onClick={() => props.removeSubreddit(props.arrayPosition)}
    />
  </div>
);

Subreddit.propTypes = {
  arrayPosition: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  removeSubreddit: React.PropTypes.func.isRequired,
};

export default Subreddit;
