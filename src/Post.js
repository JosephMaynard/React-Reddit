import React, { Component } from 'react';
import './Post.css';

class Post extends Component {


  render() {
    return (
      <div  className="Post">
        <div className="thumbnail">
          <img src={this.props.data.thumbnail} />
        </div>
        <a href={this.props.data.url}>{this.props.data.title}</a>
      </div>
    );
  }
}

export default Post;