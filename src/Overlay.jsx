import React from 'react';
import './Overlay.css';

const Overlay = (props) => (
  <div className="Overlay" onClick={() => props.toggleMenu} />
);

export default Overlay;
