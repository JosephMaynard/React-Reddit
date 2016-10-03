import React, { Component } from 'react';
import './AddSubreddit.css';


class AddSubreddit extends Component {

  constructor(props, context) {
    super(props, context);
    this.addSubredditHandler = this.addSubredditHandler.bind(this);
  }

  addSubredditHandler(event) {
    event.preventDefault();
    this.props.addSubreddit(this.subredditInput.value);
    this.subredditInput.value = '';
  }

  render() {
    return (
      <div className="AddSubreddit">
        <form onSubmit={this.addSubredditHandler}>
          <input
            type="text"
            placeholder="Enter subreddit"
            ref={(input) => { this.subredditInput = input; }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

AddSubreddit.proptypes = {
  addSubreddit: React.PropTypes.func.isRequired,
};

export default AddSubreddit;
