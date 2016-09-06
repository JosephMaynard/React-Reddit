import React, { Component } from 'react';
import './Post.css';

class Post extends Component {


  render() {
    return (
      <div  className="Post">
        <div className="thumbnail">
          <img src={this.props.data.thumbnail} />
        </div>
        <p><a href={this.props.data.url} target="_blank">{this.props.data.title}</a> ({this.props.data.domain})<br/>
        <a href={`https://reddit.com${this.props.data.permalink}`} target="_blank">Comments ({this.props.data.num_comments})</a></p>
      </div>
    );
  }
}

export default Post;