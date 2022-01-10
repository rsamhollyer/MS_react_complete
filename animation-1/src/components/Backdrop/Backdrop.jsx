import React from 'react';
import './Backdrop.css';

const backdrop = props => <div className={`Backdrop ${props.show || null}`} />;

export default backdrop;
