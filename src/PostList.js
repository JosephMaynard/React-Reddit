import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let subreddits = ['javascript', 'programming', 'ProgrammerHumor', 'webdev'];

      fetch('https://www.reddit.com/r/' + subreddits.join('+') +'/.json')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            data: json,        
          });
        });
  }


  render() {
    return (
      <div>
        {this.props.data.map(function(result) {
           return <Post key={data.id} data={data}/>;
        })}
      </div>
    );
  }
}

export default PostList;