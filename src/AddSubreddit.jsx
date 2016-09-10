import React, { Component } from 'react';
import './AddSubreddit.css';


class AddSubreddit extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      newSubReddit: '',
    };
  }

  handleChange(event) {
    this.setState({ newSubReddit: event.target.value });
  }

  render() {
  	return(
	  <div>
	    <input type="text" placeholder="Enter subreddit" onChange={this.handleChange} />
	    <button onClick={() => this.props.addSubreddit(this.state.newSubReddit)}>Add</button>
	  </div>
	);
  }
}

AddSubreddit.proptypes = {
  addSubreddit: React.PropTypes.func,
};

export default AddSubreddit;
