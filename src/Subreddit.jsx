import React, { Component } from 'react';
import CloseBtn from './CloseBtn.svg';
import './Subreddit.css';

class Subreddit extends Component {
  render() {
    return (
      <div className="Subreddit">
        <label
          htmlFor={(`${this.props.name}_${this.props.arrayPosition}_${this.props.color}`)}
          style={{ background: this.props.color }}
        >
          <input
            id={(`${this.props.name}_${this.props.arrayPosition}_${this.props.color}`)}
            type="color"
            defaultValue={this.props.color}
            onChange={() => this.props.changeColor(this.props.subredditIndex, this.props.name, this.colorInput.value)}
            ref={(input) => { this.colorInput = input; }}
          />
        </label>
        <p>{this.props.name}</p>
        <img
          src={CloseBtn}
          className="RemoveSubreddit"
          alt="Remove Subreddit"
          onClick={() => this.props.deleteSubreddit(this.props.subredditIndex, this.props.name)}
        />
      </div>
    );
  }
}

Subreddit.propTypes = {
  arrayPosition: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  deleteSubreddit: React.PropTypes.func.isRequired,
  changeColor: React.PropTypes.func.isRequired,
  subredditIndex: React.PropTypes.number.isRequired,
};

export default Subreddit;
