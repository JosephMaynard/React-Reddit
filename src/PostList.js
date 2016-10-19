import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import Loading from './Loading';
import './PostList.css';

class PostList extends Component {

  constructor(props, context) {
    super(props, context);
    this.loadInitialPosts = this.loadInitialPosts.bind(this);
    this.loadMorePosts = this.loadMorePosts.bind(this);


    this.state = {
      posts: [],
      loadedPosts: [],
      postNumber: 25,
      subredditsToLoad: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.loadInitialPosts();
  }

  componentWillReceiveProps() {
    if (Object.keys(this.props.subreddits.subreddits).join(',') !== this.state.subredditsToLoad.join(',')) {
      this.loadInitialPosts();
    }
  }

  loadInitialPosts() {
    const subredditsToLoad = Object.keys(this.props.subreddits.subreddits);
    this.setState({
      posts: [],
      postNumber: 25,
      loading: true,
      subredditsToLoad,
    });
    const that = this;
    this.serverRequest =
      axios
        .get(`https://www.reddit.com/r/${subredditsToLoad.join('+')}/.json?raw_json=1`)
        .then(result => {
          that.setState({
            posts: result.data.data.children,
            loading: false,
          });
        });
  }

  loadMorePosts() {
    const that = this;
    const subredditsToLoad = Object.keys(this.props.subreddits.subreddits);
    this.serverRequest =
      axios
        .get(`https://www.reddit.com/r/${subredditsToLoad.join('+')}/.json?count=${
              this.state.postNumber + 25
            }&after=${
              this.state.loadedPosts[this.state.loadedPosts.length - 1]}&raw_json=1`)
        .then(result => {
          //console.log(result);
          const newPosts = [];
          const newPostsLoaded = [];
          for (const post of result.data.data.children) {
            // console.log(post.data.name);
            if (this.state.loadedPosts.indexOf(post.data.name) === -1) {
              newPosts.push(post);
              newPostsLoaded.push(post.data.name);
            }
          }
          that.setState({
            posts: that.state.posts.concat(newPosts),
            loadedPosts: that.state.loadedPosts.concat(newPostsLoaded),
            postNumber: that.state.postNumber + 25,
          });
        });
  }

  render() {
    if (this.state.loading){
      return <Loading />;
    }
    return (
      <div className="PostList">
        {this.state.posts.map((result, index) => (
          <Post
            key={index}
            data={result.data}
            subreddits={this.props.subreddits.subreddits}
          />
        ))}
        <button onClick={this.loadMorePosts}>Load More</button>
      </div>
    );
  }
}

export default PostList;
