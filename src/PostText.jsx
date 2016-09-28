import React from 'react';
import UpVoteArrow from './UpVoteArrow.svg';
import './PostText.css';

const PostText = (props) => (
  <div className="PostText">
    <p>
      <a
        href={props.url}
        className="title"
        target="_blank"
        rel="noopener noreferrer"
      >{props.title}</a> ({props.domain})<br />
      Submitted {props.submitted} hours ago to <a
        href={`https://reddit.com/r/${props.subreddit}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        /r/{props.subreddit}
      </a> by <a
        href={`https://reddit.com/user/${props.author}`}
        target="_blank"
        rel="noopener noreferrer"
      >{props.author}</a>
      <br />
      <img
        src={UpVoteArrow}
        className="UpVoteArrow"
        alt="Up Votes"
      />
      {props.ups} <a
        href={`https://reddit.com${props.permalink}`}
        target="_blank"
        rel="noopener noreferrer"
      >Comments ({props.comments})</a>
    </p>
  </div>
);

PostText.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  domain: React.PropTypes.string.isRequired,
  subreddit: React.PropTypes.string.isRequired,
  submitted: React.PropTypes.number.isRequired,
  ups: React.PropTypes.number.isRequired,
  permalink: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number.isRequired,
  author: React.PropTypes.string.isRequired,
};

export default PostText;
