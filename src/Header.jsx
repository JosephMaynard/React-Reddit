import React from 'react';
import Headroom from 'react-headroom';
import logo from './logo.svg';
import MenuBtn from './MenuBtn.svg';
import './Header.css';

const Header = (props) => (
  <Headroom>
    <div className="Header">
      <div className="inner">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Reddit <span>(&nbsp;{
          Object.keys(props.subreddits).join('\xa0+\xa0')
        }&nbsp;)</span></h2>
        <img src={MenuBtn} className="MenuBtn" alt="Menu" onClick={props.toggleMenu} />
      </div>
    </div>
  </Headroom>
);

Header.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired,
  subreddits: React.PropTypes.array.isRequired,
};

export default Header;
