import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className="spinner">
    <div className="ringContainer"><div className="ring ring1" /></div>
    <div className="ringContainer"><div className="ring ring2" /></div>
    <div className="ringContainer"><div className="ring ring3" /></div>
  </div>
);


export default Spinner;
