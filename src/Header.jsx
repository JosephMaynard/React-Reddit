import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div  className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reddit</h2>
          <button onClick={this.props.toggleMenu} disabled={this.props.showMenu}>{
          this.props.showMenu
          ? ('-')
          : ('+')
        }</button>
      </div>
    );
  }
}

export default Header;
