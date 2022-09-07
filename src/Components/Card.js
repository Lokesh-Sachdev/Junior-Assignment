import React, { Component } from 'react';
import Product from '../images/Product-img.png';
import AddToCart from '../images/add-to-cart.png';

export default class card extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <img className="add-cart hidden" src={AddToCart} />
          <img className="card-img" src={Product} />
        </div>
        <div className="card-content">
          <p className="card-title">Apollo Running Short</p>
          <p className="card-price">$50.00</p>
        </div>
      </div>
    );
  }
}
