import React, { Component } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
import Product from '../images/Drop-img.png';

export default class CartDropDown extends Component {
  render() {
    return (
      <div className="dropdown-container hidden">
        <div className="dropdown-items">
          <div className="dropdown-title">My Bags,</div>
          <div className="cart-item">
            <div>
              <div className="product-container">
                <div className="product-details">
                  <div className="cart-content">
                    <p className="drop-cart-title">Apollo Running Short</p>
                    <p className="drop-cart-price">$50.00</p>
                  </div>

                  <div className="drop-size">
                    <p className="drop-text">Size:</p>
                    <div className="size-boxes">
                      <div className="size-box-style">
                        <p className="size-text">XS</p>
                      </div>
                      <div className="size-box-style">
                        <p className="size-text">S</p>
                      </div>
                      <div className="size-box-style">
                        <p className="size-text">M</p>
                      </div>
                      <div className="size-box-style">
                        <p className="size-text">L</p>
                      </div>
                    </div>
                  </div>
                  <div className="drop-color-box">
                    <p className="drop-text">Color:</p>
                    <div className="color-boxes">
                      <div id="color-1" className="color-box-style"></div>
                      <div id="color-2" className="color-box-style"></div>
                      <div id="color-3" className="color-box-style"></div>
                    </div>
                  </div>
                </div>
                <div className="add-clear-btn">
                  <div>
                    <FiPlusSquare className="add-clear-size" />
                  </div>
                  <p>1</p>
                  <div>
                    <FiMinusSquare className="add-clear-size" />
                  </div>
                </div>
              </div>
            </div>
            <img className="drop-img" src={Product} />
          </div>
          <div className="cart-total">
            <p className="total-text">Total</p>
            <p className="final-sum">$200</p>
          </div>
        </div>
        <div className="cart-btn-container">
          <button className="dropdown-btn">
            <div className="view-font" id="drop-view-btn">
              VIEW BAG
            </div>
          </button>
          <button className="dropdown-btn">
            <div className="check-out-font" id="check-out-btn">
              CHECK OUT
            </div>
          </button>
        </div>
      </div>
    );
  }
}
