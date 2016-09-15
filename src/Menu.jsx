import React, { Component } from 'react';
import AddSubreddit from './AddSubreddit';
import './Menu.css';

class Menu extends Component {

  constructor(props, context) {
    super(props, context);
    this.addSubreddit = this.addSubreddit.bind(this);
  }

  addSubreddit(subredddit) {
    this.props.changeSubreddits(this.props.subreddits.concat(subredddit));
  }

  render() {
    console.log(this.props);
    return (
      <div className="Menu">
      	<button onClick={this.props.toggleMenu}>-</button>
        <AddSubreddit addSubreddit={this.addSubreddit} />
        {this.props.subreddits.map((result, index) => <div key={index}>{result}</div>)}
      </div>
      );
  }
}

export default Menu;
