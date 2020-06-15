import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const Sum = (props) => {
    return (<h1 style={{margin:'1em'}}>{props.a} + {props.b} = {props.a + props.b}</h1>);
}

Sum.PropTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
};

export default Sum;
