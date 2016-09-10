import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class PostList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: [],
      loadedPosts: [],
      postNumber: 25,
    };
  }

  componentDidMount() {
    const _this = this;
    this.serverRequest =
      axios
        .get(`https://www.reddit.com/r/${ this.props.subreddits.join('+') }/.json?raw_json=1`)
        .then(result => {   
          console.log(result);
          _this.setState({
            posts: result.data.data.children,
          });
        });
  }

  loadMorePosts() {
    const _this = this;
    this.serverRequest =
      axios
        .get(`https://www.reddit.com/r/${ this.props.subreddits.join('+') }/.json?count=${
              this.state.postNumber + 25
            }&after=${
              this.state.loadedPosts[this.state.loadedPosts.length - 1]}&raw_json=1`)
        .then(result => {
          console.log(result);
          const newPosts = [];
          const newPostsLoaded = [];
          for(const post of result.data.data.children){
            if(this.state.loadedPosts.indexOf(post.data.name) === -1){
              newPosts.push(post);
              newPostsLoaded.push(post.data.name);
            }
          }
          _this.setState({
            posts: _this.state.posts.concat(newPosts),
            loadedPosts: _this.state.loadedPosts.concat(newPostsLoaded),
            postNumber: _this.state.postNumber + 25,
          });
        });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(result => <Post key={result.data.name + (Math.round(Math.random() * 1e8)).toString(36)} data={result.data} />)
        }
        <button onClick={this.loadMorePosts.bind(this)}>Load More</button>
      </div>
    );
  }
}

export default PostList;