import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    return (
      <div  className="Post">
        <div className="thumbnail" style={ {'background': '#' + Math.floor(Math.random()*16777215).toString(16)} }>
          { this.props.data.thumbnail && this.props.data.thumbnail !== 'self' && this.props.data.thumbnail !== 'default'
            ? <img src={this.props.data.thumbnail} alt={this.props.data.title} />
            : <p>{this.props.data.subreddit.substr(0,1).toUpperCase()}</p>
          }
        </div>
        <p><a href={this.props.data.url} className="title" target="_blank" rel="noopener noreferrer">{this.props.data.title}</a> ({this.props.data.domain})<br/>
        Submitted {
          Math.round(((new Date()).getTime()  - (parseInt(this.props.data.created_utc) * 1000)) / 3600000)
        } hours ago to <a href={`https://reddit.com/r/${this.props.data.subreddit}`} target="_blank"  rel="noopener noreferrer">/r/{this.props.data.subreddit}</a> by <a href={`https://reddit.com/user/${this.props.data.author}`} target="_blank"  rel="noopener noreferrer">{this.props.data.author}</a>
          <br/><a href={`https://reddit.com${this.props.data.permalink}`} target="_blank" rel="noopener noreferrer">Comments ({this.props.data.num_comments})</a></p>
      </div>
    );
  }
}

export default Post;
