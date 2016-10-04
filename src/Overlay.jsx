import React from 'react';
import './Overlay.css';

const Overlay = (props) => (
  <div className="Overlay" onClick={props.toggleMenu} />
);

Overlay.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired,
};

export default Overlay;
