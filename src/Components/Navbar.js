import React, { Component } from 'react';
import logo from '../images/a-logo.png';
import vector from '../images/Vector.png';
import cart from '../images/cart-logo.png';
import CartDropDown from './CartDropDown';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-text">
          <div>Women</div>
          <div>Men</div>
          <div>Kids</div>
        </div>
        <div className="nav-logo">
          <img src={logo} />
        </div>
        <div className="nav-action">
          <div className="nav-dropdown">
            <p className="cur-logo">&#36;</p>
            <img src={vector} />
          </div>
          <div className="nav-cart">
            <img src={cart} />
            <CartDropDown />
          </div>
        </div>
      </div>
    );
  }
}
