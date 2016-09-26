import React from 'react';
import logo from './logo.svg';
import MenuBtn from './MenuBtn.svg';
import './Header.css';

const Header = (props) => (
  <div className="Header">
    <div className="inner">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React Reddit</h2>
      <img src={MenuBtn} className="MenuBtn" alt="Menu" onClick={props.toggleMenu} />
    </div>
  </div>
);

Header.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired,
};

export default Header;