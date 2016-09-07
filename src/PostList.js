import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class PostList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const _this = this;
    this.serverRequest =
      axios
        .get(`https://www.reddit.com/r/${ this.props.subreddits.join('+') }/.json`)
        .then(function(result) {    
          console.log(result);
          _this.setState({
            posts: result.data.data.children,
          });
        });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(result => <Post key={result.data.id} data={result.data} />)}
      </div>
    );
  }
}

export default PostList;