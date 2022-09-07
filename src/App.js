import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import Card from './Components/Card.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p className="card-category">Women's Wear</p>
        <Card />
      </div>
    );
  }
}
